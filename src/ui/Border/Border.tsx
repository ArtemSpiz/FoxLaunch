import styles from "./Border.module.css";

export default function Border({
  stroke = "",
  width = 7,
  height = 7,
  classBorder = "",
}) {
  return (
    <div className={`${styles.borderWrapper} ${classBorder}`}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 7 7"
          fill="none"
        >
          <path d="M7 1H1V7" stroke={stroke} strokeLinejoin="bevel" />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 7 7"
          fill="none"
        >
          <path
            d="M-2.38419e-07 1H6V7"
            stroke={stroke}
            strokeLinejoin="bevel"
          />
        </svg>
      </div>
    </div>
  );
}
