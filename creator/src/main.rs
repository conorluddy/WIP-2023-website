use std::io::prelude::*;
use std::fs;
use std::env;
use pulldown_cmark::{Parser, Options, html};
use std::fs::File;
use std::path::PathBuf;

fn main() -> std::io::Result<()> {
    let args: Vec<String> = env::args().collect();
    let content_path = &args[1];
    let output_path = &args[2];

    for entry in fs::read_dir(content_path).unwrap() {
        let entry = entry.unwrap();
        let path = entry.path();
        if path.is_file() {
            let content = fs::read_to_string(path).unwrap();
            let options = Options::empty();
            let parser = Parser::new_ext(&content, options);
            let mut html_output = String::new();
            html::push_html(&mut html_output, parser);
            let output_file: PathBuf = [output_path, "fixmyname.html"].iter().collect();
            let mut file = File::create(output_file)?;
            file.write_all(html_output.as_bytes())?;
        } else {
            println!("{:?} is a dir", path);
        }
    }
    Ok(())
}



