import styles from "./BlueButton.module.css";

export default function BlueButton({
  text = "Explore all Features",
  className = "",
}) {
  return (
    <button className={`${styles.BlueButton} ${className}`}>{text}</button>
  );
}
