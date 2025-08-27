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

        <BgVideo src="/videos/Video-Home.MOV" />
      </div>
    </div>
  );
}
