import styles from "./BlueButton.module.css";

type BlueButtonProps = {
  text?: string;
  className?: string;
  onClick?: () => void;
};

export default function BlueButton({
  text = "Explore all Features",
  className = "",
  onClick,
}: BlueButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.BlueButton} ${className}`}>
      {text}
    </button>
  );
}
