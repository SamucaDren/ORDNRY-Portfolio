import styles from "./style.module.css";
import Image from "next/image";

function SlideImagesElement() {
  const ROWS = 2;

  return (
    <div className={styles.slider}>
      <div
        className={styles.slideTrack}
        style={{ "--rows": ROWS } as React.CSSProperties}
      >
        {[...Array(4)].map((_, index) => (
          <div className={styles.slide} key={index}>
            <Image
              src="/slides_images.webp"
              alt=""
              width={3853}
              height={500}
              priority
              unoptimized
              className={styles.slideImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideImagesElement;
