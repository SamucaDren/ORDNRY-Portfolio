import "./slide_images_element-style.css";

function SlideImagesElement() {
  const ROWS = 2; // quantidade de fileiras

  const images = Object.values(
    import.meta.glob("/src/assets/slides_images/*.{png,jpg,jpeg,webp,svg}", {
      eager: true,
      as: "url",
    }),
  );

  return (
    <div className="slider">
      <div
        className="slide-track multi-row"
        style={{ "--rows": ROWS } as React.CSSProperties}
      >
        {[...images, ...images].map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideImagesElement;
