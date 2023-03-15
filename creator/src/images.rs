use image::imageops;
use image::GenericImageView;
use std::fs::{self};
use std::path::{Path, PathBuf};

pub fn handle_images() {
    let src_dir = Path::new("../content/media");
    let dist_dir = Path::new("../dist/media");
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
            optimize_and_move_jpeg(&path, &new_path);
        }
    }
}

fn optimize_and_move_jpeg(src_path: &Path, dist_path: &Path) {
    let img = image::open(src_path).unwrap();
    let (width, height) = img.dimensions();
    let (new_width, new_height) = get_dimensions_with_aspect_ratio(width, height, 1920, 1080);

    if width > 1920 {
        let resized_img = imageops::resize(
            &img,
            new_width,
            new_height,
            image::imageops::FilterType::Lanczos3,
        );
        println!(
            "Image: {} {} {} {} {}",
            dist_path.display(),
            width,
            height,
            new_width,
            new_height
        );
        resized_img.save(dist_path).unwrap();
    } else {
        println!("Image: {} {} {}", dist_path.display(), width, height);
        img.save(dist_path).unwrap();
    }
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

fn get_dimensions_with_aspect_ratio(
    width: u32,
    height: u32,
    max_width: u32,
    max_height: u32,
) -> (u32, u32) {
    let mut new_width = width;
    let mut new_height = height;
    if width > max_width {
        new_width = max_width;
        new_height = (new_width as f32 / width as f32 * height as f32) as u32;
    }
    if new_height > max_height {
        new_height = max_height;
        new_width = (new_height as f32 / height as f32 * width as f32) as u32;
    }
    (new_width, new_height)
}
