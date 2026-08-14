import styles from "./style.module.css";
import Image from "next/image";
import slidesImages from "@/app/(assets)/slides_images.webp";

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
              src={slidesImages}
              alt=""
              width={3853}
              height={500}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideImagesElement;
