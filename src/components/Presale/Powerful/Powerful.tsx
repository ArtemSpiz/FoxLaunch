import Image from "next/image";
import styles from "./Powerful.module.css";
import Plus from "../../../assets/svg/Plus.svg";
import Coin from "../../../assets/img/PowerfulCoin.png";
import BlueButton from "@/src/ui/BlueButton/BlueButton";
import Border from "@/src/ui/Border/Border";

const PowerfulSubtitles = [
  {
    title: "Own Claim Tool",
  },

  {
    title: "No delayed distribution",
  },
  {
    title: "You are in control",
  },
  {
    title: "Token Launch Coordination",
  },
  {
    title: "Real-time Status Updates",
  },
];

export default function Powerful() {
  return (
    <div className={styles.powerful}>
      <div className={styles.texts}>
        <div className={`${styles.title} title`}>
          Manage your presale participation with our powerful Dashboard
        </div>

        <div className={styles.subtitles}>
          {PowerfulSubtitles.map((sub, index) => (
            <div key={index} className={styles.subtitle}>
              <Border stroke="#A5C6E2" />
              <div className={styles.subContent}>
                <div className={styles.icon}>
                  <Image src={Plus} alt="image" />
                </div>
                {sub.title}
              </div>
              <Border stroke="#A5C6E2" classBorder={styles.borderBot} />
            </div>
          ))}
        </div>

        <div className={styles.line} />
      </div>

      <div className={styles.bottomCont}>
        <div className={styles.image}>
          <Image src={Coin} alt="image" />
        </div>

        <div className={styles.rightCont}>
          <div className={styles.text}>
            <span>Our main task for this project</span> was to ensure a
            transparent and user-controlled token distribution process. The goal
            was to eliminate delays and give users full control over claiming
            their purchased tokens
          </div>
          <div className={styles.text}>
            We implemented a dedicated claiming tool, enabling users to 
            <span>claim $FIX tokens immediately after the launch</span>,
            avoiding any waiting periods. This approach reinforced trust,
            streamlined the post-presale process, and aligned with the project's
            mission of fair and efficient distribution.
          </div>
          <BlueButton text="Claim $FIX" className={styles.btn} />
        </div>
      </div>
    </div>
  );
}
