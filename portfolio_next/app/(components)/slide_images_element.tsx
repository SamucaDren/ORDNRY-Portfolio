import "./slide_images_element-style.css";
import Image from "next/image";
import slides_images from "../(assets)/slides_images.webp";

function SlideImagesElement() {
  const ROWS = 2;

  return (
    <div className="slider">
      <div
        className="slide-track multi-row"
        style={{ "--rows": ROWS } as React.CSSProperties}
      >
        {[...Array(4)].map((_, index) => (
          <div className="slide" key={index}>
            <img
              src={slides_images.src}
              alt=""
              width={300}
              height={300}
              fetch-priority="high"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideImagesElement;
