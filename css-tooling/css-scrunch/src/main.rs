use std::fs;
use std::io::prelude::*;

mod bundler;

fn main() -> std::io::Result<()> {
    let args: Vec<String> = env::args().collect();
    let content_path = &args[1];
}
