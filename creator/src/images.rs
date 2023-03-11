use image;
use std::fs::{self};
use std::path::{Path, PathBuf};

pub fn handle_images() {
    // Define the source and destination directories
    let src_dir = Path::new("../content/media");
    let dist_dir = Path::new("../dist/media");
    // Recursively crawl the source directory and move image files to the dist directory
    crawl_dir(&src_dir, &dist_dir);
}

fn crawl_dir(src_dir: &Path, dist_dir: &Path) {
    for entry in fs::read_dir(src_dir).unwrap() {
        let entry = entry.unwrap();
        let path = entry.path();
        if path.is_dir() {
            crawl_dir(&path, dist_dir);
        } else if is_image_file(&path) {
            let new_path = get_dist_path(&path, src_dir, dist_dir);
            fs::create_dir_all(new_path.parent().unwrap()).unwrap();
            optimize_and_move_image(&path, &new_path);
        }
    }
}

fn optimize_and_move_image(src_path: &Path, dist_path: &Path) {
    // Open the input image
    let img = image::open(src_path).unwrap();
    img.save(dist_path).unwrap();
}

fn is_image_file(path: &Path) -> bool {
    if let Some(ext) = path.extension() {
        match ext.to_str().unwrap().to_lowercase().as_ref() {
            "jpg" | "jpeg" | "png" | "gif" | "bmp" => true,
            _ => false,
        }
    } else {
        false
    }
}

fn get_dist_path(path: &Path, src_dir: &Path, dist_dir: &Path) -> PathBuf {
    let relative_path = path.strip_prefix(src_dir).unwrap();
    dist_dir.join(relative_path)
}
