import { OnChainCards } from "@/src/constants/OnChainCards";
import styles from "./onChainHero.module.css";
import Socials from "@/src/ui/Socials/Socials";

export default function OnChainHero() {
  return (
    <div className={`${styles.onChainHero} container`}>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <div className={`${styles.title} title`}>
            Best trading platforms for crypto prop traders
          </div>
        </div>

        {OnChainCards.map((card, i) => (
          <div className={styles.card} key={i}>
            <Socials
              wrapperClass={styles.icon}
              enableHover={false}
              stroke="#A5C6E2"
              links={[{ icon: card.image, name: "" }]}
            />

            <div className={styles.bottom}>
              {card.title && (
                <div className={styles.titleCard}>{card.title}</div>
              )}
              <div className={styles.textCard}>{card.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.BgVideo}`}>
        <video autoPlay loop muted className={styles.video}>
          <source src={"/videos/Video-13.mov"} type="video/quicktime" />
        </video>
      </div>
    </div>
  );
}
