import styles from "./Manage.module.css";

import Coin from "../../../assets/svg/EstimateCoin.svg";
import Socials from "@/src/ui/Socials/Socials";
import Border from "@/src/ui/Border/Border";
import Image from "next/image";
import ManageImg from "../../../assets/img/ManageImg.png";

const ManageCards = [
  {
    icon: Coin,
    title: "Live Token Sale Updates: ",
    subtitle: "View the current status of the presale",
  },
  {
    icon: Coin,
    title: "Investment Tracking: ",
    subtitle: "See your investments and remaining vesting schedules",
  },
  {
    icon: Coin,
    title: "Secure Transactions: ",
    subtitle: "All purchases are protected with advanced encryption",
  },
];

export default function Manage() {
  return (
    <div className={styles.manage}>
      <div className={styles.manageRight}>
        <div className={styles.manageRightCont}>
          <div className={`${styles.title} title`}>
            Manage your presale participation with our powerful Dashboard
          </div>
          <div className={styles.cards}>
            {ManageCards.map((card, index) => (
              <div className={styles.card} key={index}>
                <Socials
                  wrapperClass={styles.cardIcon}
                  stroke="#A5C6E2"
                  links={[
                    {
                      name: "cardIcon",
                      icon: card.icon,
                    },
                  ]}
                />

                <div className={styles.cardText}>
                  <div className={styles.cardTitle}>{card.title}</div>
                  <div className={styles.cardSubtitle}>{card.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.subtitleWrapper}>
          <div className={styles.subtitle}>
            Manage your presale participation from a single dashboard. View your
            current investments, monitor live token sales, and check your
            transaction history. The dashboard provides a seamless experience
            for buying and tracking $FIX tokens
          </div>
        </div>
      </div>

      <div className={styles.cardLeft}>
        <Border stroke="#010302" strokeWidth={2} width={42} height={42} />
        <div className={styles.cardLeftImage}>
          <Image src={ManageImg} alt="image" />
        </div>
        <Border
          stroke="#010302"
          strokeWidth={2}
          width={42}
          height={42}
          classBorder={styles.borderBot}
        />
      </div>
    </div>
  );
}
