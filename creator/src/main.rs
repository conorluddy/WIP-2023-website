use pulldown_cmark::{html, Options, Parser};
use std::env;
use std::ffi::OsString;
use std::fs;
use std::fs::File;
use std::io::prelude::*;
use std::path::PathBuf;

fn main() -> std::io::Result<()> {
    let args: Vec<String> = env::args().collect();
    let content_path = &args[1];
    let output_path = &args[2];
    let template_file_path = &args[3];
    let replacement_placeholder = "<!-- Injection point for Rust -->";
    let template_string = fs::read_to_string(template_file_path).unwrap();
    let options = Options::empty();

    for entry in fs::read_dir(content_path).unwrap() {
        let entry = entry.unwrap();
        let path = entry.path();
        let os_filename = entry.path().file_stem().unwrap().to_owned();
        let os_string = OsString::from(os_filename);
        let filename = os_string.to_str().unwrap();

        if path.is_file() {
            // Convert MD file to HTML and inject it into the HTML template
            let mut html_output = String::new();
            let content = fs::read_to_string(path).unwrap();
            let parser = Parser::new_ext(&content, options);
            html::push_html(&mut html_output, parser);
            // Create a HTML file and write template to it
            // println!("{:?} created", output_path);
            let mut output_path: PathBuf = [output_path, filename].iter().collect();
            output_path.set_extension("html");
            let mut file = File::create(output_path)?;
            let html_template =
                template_string.replace(replacement_placeholder, html_output.as_str());
            file.write_all(html_template.as_bytes())?;
        } else {
            // TODO: Recursively handle directories
            // println!("is a dir");
        }
    }
    Ok(())
}
