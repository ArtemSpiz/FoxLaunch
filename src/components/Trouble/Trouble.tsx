import styles from "./Trouble.module.css";

export default function Trouble() {
  return (
    <div className={styles.trouble}>
      <div className={styles.troubleShadow} />
      <div className={styles.troubleText}>
        <div className={`${styles.troubleTitle} title`}>
          Having trouble buying the presale?
        </div>
        <button className={styles.troubleBtn}>
          <span>Contact Us</span>
        </button>
      </div>
    </div>
  );
}
