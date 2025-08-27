import styles from "./Hero.module.css";
import image1 from "../../assets/img/NewsCard1.png";
import image2 from "../../assets/img/NewsCard2.png";
import image3 from "../../assets/img/NewsCard3.png";
import Image from "next/image";
import TickCircle from "@/src/assets/svg/TickCircle.svg";
import TableGlow from "@/src/assets/img/tableGlow.png";
import BgVideo from "@/src/ui/BgVideo/BgVideo";

const NewsCards = [
  {
    image: image1,
    activeTitles: 1,
  },
  {
    image: image2,
    activeTitles: 3,
  },
  {
    image: image3,
    activeTitles: 5,
  },
];

const CardsTitles = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Lorem ipsum dolor ",
  },
  {
    title: "Lorem ipsum",
  },
];

export default function HeroNews() {
  return (
    <div className={`${styles.heroNews} heroContainer`}>
      <div className={styles.gridWrapper}>
        <BgVideo
          srcMp4="/videos/mp4/Video-09.mp4"
          srcWebm="/videos/webm/Video-09.webm"
          src="/videos/Video-09.mov"
        />
        <div className={`${styles.grid} heroContainerMob`}>
          <div className={styles.titleWrapper}>
            <div className={styles.TableGlow}>
              <Image src={TableGlow} alt="image" />
            </div>
            <div className={`${styles.title} title`}>Members club</div>
          </div>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Eget mattis nulla id erat
            nulla nibh facilisis vel nisl. Est massa quam id cras semper
            ullamcorper sagittis fermentum suspendisse.
          </div>

          {NewsCards.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
            >
              <div className={styles.image}>
                <Image src={card.image} alt="image" />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardSubtitles}>
                  {CardsTitles.map((sub, i) => (
                    <div
                      key={i}
                      className={`${styles.subtitle} ${
                        i < card.activeTitles ? styles.active : ""
                      }`}
                    >
                      <div
                        className={`${styles.icon} ${
                          i < card.activeTitles ? styles.active : ""
                        }`}
                      >
                        <Image src={TickCircle} alt="image" />
                      </div>
                      {sub.title}
                    </div>
                  ))}
                </div>

                <button className={styles.btn}>Join Whitelist</button>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
}
