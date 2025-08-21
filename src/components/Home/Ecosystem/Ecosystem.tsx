import Socials from "@/src/ui/Socials/Socials";
import styles from "./Ecosystem.module.css";
import Image from "next/image";
import EcoIconSub from "../../../assets/svg/EcosystemSubtitleIcon.svg";
import EcoImgCoin from "../../../assets/img/ecoImgCoin.png";

const EcosystemCards = [
  {
    number: "Q1",
    year: "2024",
    subtitles: [
      { subtitle: "Affiliate Program Release" },
      { subtitle: "Global Marketing Campaigns" },
      { subtitle: "Mobile App Launch" },
      { subtitle: "Full Academy Release" },
      { subtitle: "OnChain Trading" },
      { subtitle: "Exchange Listings" },
      { subtitle: "FundFix Dashboard Launch" },
      { subtitle: "Academy Beta" },
    ],
  },
  {
    number: "Q2",
    year: "2024",
    subtitles: [
      { subtitle: "Affiliate Program Release" },
      { subtitle: "Global Marketing Campaigns" },
      { subtitle: "Mobile App Launch" },
    ],
  },
  {
    number: "Q3",
    year: "2024",
    subtitles: [
      { subtitle: "Affiliate Program Release" },
      { subtitle: "Global Marketing Campaigns" },
    ],
  },
  {
    number: "Q4",
    year: "2024",
    subtitles: [
      { subtitle: "Affiliate Program Release" },
      { subtitle: "Global Marketing Campaigns" },
    ],
  },
];

export default function Ecosystem() {
  return (
    <div className={`${styles.ecosystem} container`}>
      <div className={styles.ecosystemText}>
        <div className={`${styles.ecosystemTitle} title`}>
          What’s next for the Ffx Ecosystem
        </div>
        <div className={styles.ecosystemSubtitle}>
          We have a clear vision for the future of trading. Here’s what we’re
          working on to make FundFix the top choice for traders.
        </div>
      </div>

      <div className={styles.ecosystemCards}>
        <div className={styles.ecoImgCoin}>
          <Image src={EcoImgCoin} alt="" />
        </div>
        {EcosystemCards.map((card, index) => (
          <div
            className={`${styles.ecosystemCard} ${
              styles[`ecosystemCard${index + 1}`]
            }`}
            key={index}
          >
            <div className={styles.ecoCardTop}>
              <Socials
                wrapperClass={styles.ecoCardSoc}
                stroke="#A5C6E2"
                links={[
                  {
                    name: "ecoSoc",
                    text: card.number,
                  },
                ]}
              />

              <div className={styles.ecoCardYear}>{card.year}</div>
            </div>
            <div className={styles.ecoCardSubtitles}>
              {card.subtitles.map((sub, index) => (
                <div key={index} className={styles.ecoCardSub}>
                  <Image width={40} height={40} src={EcoIconSub} alt="" />
                  {sub.subtitle}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
