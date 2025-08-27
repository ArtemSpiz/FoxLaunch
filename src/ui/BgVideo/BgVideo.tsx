import styles from "./BgVideo.module.css";

interface BgVideoProps {
  src: string;
  srcMp4: string;
  srcWebm: string;
  type?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

export default function BgVideo({
  src,
  srcMp4,
  srcWebm,
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
        <source src={srcMp4} type="video/mp4" />
        <source src={srcWebm} type="video/webm" />
      </video>
    </div>
  );
}
