import styles from "./style.module.css";

type SealProps = {
  text?: string;
};

function Seal({ text = "DESIGN • PORTFÓLIO • ORDNRY •" }: SealProps) {
  return (
    <div className={styles.sealContainer}>
      <svg viewBox="0 0 110 110" className={styles.textSealElement}>
        <defs>
          <path
            id="circlePath"
            d="M55,55 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
          />
        </defs>

        <text className={styles.sealText}>
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>

      <svg viewBox="0 0 37 40" className={styles.iconSealElement}>
        <path d="M0 27.2774L12.5307 19.7455L0 12.2137L4.144 5.80153L15.2933 13.7405L14.8 0L22.2 0L21.7067 13.7405L32.856 5.80153L37 12.2137L24.4693 19.7455L37 27.2774L32.856 33.6896L21.7067 25.7506L22.2 40H14.8L15.2933 25.7506L4.144 33.6896L0 27.2774Z" />
      </svg>
    </div>
  );
}

export default Seal;
