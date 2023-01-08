use css_parser::{Parser, Token};
use std::error::Error;
use std::fs;

pub struct Bundler {
    // Add any necessary fields here
}

impl Bundler {
    pub fn new() -> Self {
        // Initialize a new Bundler instance here
    }

    pub fn bundle(&self, file_names: &[String]) -> Result<String, Box<dyn Error>> {
        let mut bundled_css = String::new();

        for file_name in file_names {
            let file_contents = fs::read_to_string(file_name)?;
            bundled_css.push_str(&file_contents);
        }

        Ok(bundled_css)
    }
}
