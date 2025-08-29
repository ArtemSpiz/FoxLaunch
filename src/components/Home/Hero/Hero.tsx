import styles from "./Hero.module.css";
import HeroBlock from "./HeroBlock";
import HeroGridContent from "../../../constants/HeroGridContent";
import BgVideo from "@/src/ui/BgVideo/BgVideo";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        {HeroGridContent.map((block, index) => (
          <div key={index} className={styles.heroBlock}>
            <HeroBlock block={block} />
          </div>
        ))}

        <BgVideo
          srcMp4="/videos/mp4/Video-HeroHome.mp4"
          srcWebm="/videos/webm/Video-HeroHome.webm"
        />
      </div>
    </div>
  );
}
