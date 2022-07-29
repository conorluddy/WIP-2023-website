use std::fs;
use std::fs::File;
use std::env;
use std::path::PathBuf;
use std::ffi::OsString;
use std::io::prelude::*;
use pulldown_cmark::{Parser, Options, html};

fn main() -> std::io::Result<()> {
    let args: Vec<String> = env::args().collect();

    // $ cargo run "../content/pages" "../dist/pages"
    let content_path = &args[1];
    let output_path = &args[2];

    for entry in fs::read_dir(content_path).unwrap() {
        let options = Options::empty();
        let entry = entry.unwrap();
        let path = entry.path();
        let os_filename = entry.path().file_stem().unwrap().to_owned();
        let os_string = OsString::from(os_filename);
        let filename = os_string.to_str().unwrap();

        if path.is_file() { 
            // TODO: if filename ends with .md

            let content = fs::read_to_string(path).unwrap();
            let parser = Parser::new_ext(&content, options);

            // TODO: Match name of input MD file
            println!("Filename: {:?}", filename);

            let mut output_path: PathBuf = [output_path, filename].iter().collect();
            output_path.set_extension("html");

            println!("Writing: {:?}", output_path);

            let mut file = File::create(output_path)?;

            // Make HTML from MD
            let mut html_output = String::new();
            html::push_html(&mut html_output, parser);

            file.write_all(html_output.as_bytes())?;
        } else {
            // Recursion 
            println!("{:?} is a dir", path);
        }
    }
    Ok(())
}

// ~/Development/w/web22/creator
// $ cargo build

// TODO:
// - Filename
// - Wrapping default HTML template with <head> etc
// - Learn how to borrow properly