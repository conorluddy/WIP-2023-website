use pulldown_cmark::{html, Options, Parser};
// use std::env;
use std::ffi::OsString;
use std::fs;
use std::fs::File;
use std::io::prelude::*;
use std::path::{Path, PathBuf};

pub fn markdown() -> std::io::Result<()> {
    let content_dir = Path::new("../content/pages");
    let output_dir = Path::new("../dist");
    let template_file = Path::new("../src/templates/default.html");

    println!("content_dir: {}", content_dir.display());
    println!("output_dir: {}", output_dir.display());
    println!("template_file: {}", template_file.display());

    let replacement_placeholder = "<!-- Injection point for Rust -->";
    let template_string = fs::read_to_string(template_file).unwrap();
    let options = Options::empty();

    for entry in fs::read_dir(content_dir).unwrap() {
        let entry = entry.unwrap();
        let path = entry.path();
        let os_filename = entry.path().file_stem().unwrap().to_owned();
        let os_string = OsString::from(os_filename);
        let filename = os_string.to_str().unwrap();
        let filename_path = Path::new(filename);

        if path.is_file() {
            // Convert MD file to HTML and inject it into the HTML template
            let mut html_output = String::new();
            let content = fs::read_to_string(path).unwrap();
            let parser = Parser::new_ext(&content, options);

            html::push_html(&mut html_output, parser);
            // Create a HTML file and write template to it
            // println!("{:?} created", output_path);

            let mut output_path: PathBuf = [output_dir, filename_path].iter().collect();

            output_path.set_extension("html");

            println!("Full path: {}", output_path.display());

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
