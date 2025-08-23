import styles from "./Border.module.css";

export default function Border({
  stroke = "",
  width = 7,
  height = 7,
  classBorder = "",
  strokeWidth = 1,
}) {
  return (
    <div className={`${styles.borderWrapper} ${classBorder}`}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
        >
          <path
            d={`M${width} 1H1V${height}`}
            stroke={stroke}
            strokeLinejoin="bevel"
            strokeWidth={strokeWidth}
          />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
        >
          <path
            d={`M0 1H${width - 1}V${height}`}
            stroke={stroke}
            strokeLinejoin="bevel"
            strokeWidth={strokeWidth}
          />
        </svg>
      </div>
    </div>
  );
}
