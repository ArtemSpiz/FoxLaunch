import styles from "./BgVideo.module.css";

interface BgVideoProps {
  src: string;
  type?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

export default function BgVideo({
  src,
  type = "video/quicktime",
  autoPlay = true,
  loop = true,
  muted = true,
  className = "",
}: BgVideoProps) {
  return (
    <div className={`${styles.BgVideo} ${className}`}>
      <video
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        className={styles.video}
      >
        <source src={src} type={type} />
        Ваш браузер не підтримує відео.
      </video>
    </div>
  );
}
