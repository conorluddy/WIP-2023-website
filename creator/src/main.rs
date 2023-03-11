mod images;
mod markdown;

fn main() -> std::io::Result<()> {
    markdown::markdown().unwrap();
    images::handle_images();

    Ok(())
}
