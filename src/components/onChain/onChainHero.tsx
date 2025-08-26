import styles from "./onChainHero.module.css";
import ChainImg1 from "@/src/assets/img/ChainImg1.png";
import ChainImg2 from "@/src/assets/img/ChainImg2.png";
import ChainImg3 from "@/src/assets/img/ChainImg3.png";
import Socials from "@/src/ui/Socials/Socials";

const OnChainCards = [
  {
    image: ChainImg1,
    text: "All traders begin on demo accounts with 70–90% profit split. Hit 15% profit, and you’ll unlock trading with real capital under our crypto prop firm.",
  },
  {
    image: ChainImg2,
    title: "OnChain",
    text: "OKX provides secure, low-fee trading with deep liquidity and advanced tools.",
  },
  {
    image: ChainImg3,
    title: "FundFix Prime",
    text: "Cleo, powered by Binance, offers backtesting, smart tools, and detailed stats.",
  },
];

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
