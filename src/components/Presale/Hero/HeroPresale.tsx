"use client";
import Image from "next/image";
import styles from "./HeroPresale.module.css";
import Leader from "../../../assets/svg/Leader.svg";
import heroPresaleLine from "../../../assets/img/heroPresaleLine.png";
import infoCircle from "../../../assets/svg/infoCircle.svg";
import { useState } from "react";
import Ethereum from "../../../assets/svg/Ethereum.svg";
import DropDown from "../../../assets/svg/DropDown.svg";
import TabIconSvg1 from "../../../assets/svg/TabIconSvg1.svg";
import TabIconSvg2 from "../../../assets/svg/TabIconSvg2.svg";
import TabIconSvg3 from "../../../assets/svg/TabIconSvg3.svg";

const groups = [
  { group: "Group 1", bonus: "+30%", range: "First 20%" },
  { group: "Group 2", bonus: "+20%", range: "21%–30%" },
  { group: "Group 3", bonus: "+15%", range: "31%–40%" },
  { group: "Group 4", bonus: "+10%", range: "41%–50%" },
  { group: "Group 5", bonus: "+5%", range: "51%–100%" },
];

const tabs = [
  { tab: "Buy", icon: TabIconSvg1 },
  { tab: "Stake", icon: TabIconSvg2 },
  { tab: "History", icon: TabIconSvg3 },
];

export default function HeroPresale() {
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <div className={`${styles.heroPresaleWrapper} heroContainer`}>
      <div className={`${styles.heroPresale} heroContainerMob`}>
        <div className={`${styles.heroPresaleGrid1} ${styles.heroPresCont}`}>
          <h1 className={styles.title}>Join the $FIX token presale</h1>
        </div>

        <div className={`${styles.heroPresaleGrid2} ${styles.heroPresCont}`}>
          <div className={styles.groups}>
            {groups.map((item, i) => (
              <div key={i} className={styles.group}>
                <div className={styles.groupName}>{item.group}</div>
                <div className={styles.bonus}>$FIX {item.bonus}</div>
                <div className={styles.range}>
                  // {item.range} <span>Pre-Sale transactions</span>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.note}>
            If in total 10,000 transactions contributed to $FIX pre-sale and you
            are amongst the first 2,000 (20%), then you get 30% bonus. If for
            example you are the 4123th transaction you get 10% bonus
          </p>
        </div>

        <div className={styles.heroPresaleGrid3}>
          <div className={styles.grid3Card}>
            <div className={styles.tabs}>
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`${styles.tab} ${
                    activeTab === tab.tab ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(tab.tab)}
                >
                  <div
                    className={`${styles.tabIcon} ${
                      activeTab === tab.tab ? styles.active : ""
                    }`}
                  >
                    <Image src={tab.icon} alt="" />
                  </div>
                  {tab.tab}
                </div>
              ))}
            </div>

            <div className={styles.cardBuy}>
              <div className={styles.cardTitles}>
                <div className={styles.cardTitle}>Buy $FIX</div>
                <div className={styles.cardSubtitle}>1 $FIX = $0.005</div>
              </div>

              <div className={styles.cardBuyBot}>
                <div className={styles.cardLine}>
                  <Image src={heroPresaleLine} alt="" />
                </div>
                <div className={styles.cardText}>
                  USD Raised
                  <span>
                    $1,252.532 / <span>2,000.000</span>$
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.cardInputs}>
              <div className={styles.cardInputsTitle}>
                <Image src={infoCircle} alt="" /> your purchased $FIX = 0
              </div>
              <div className={styles.cardInput}>
                <div className={styles.cardInpTexts}>
                  <span>You pay</span>1
                </div>

                <div className={styles.cardInputsDrop}>
                  <Image src={Ethereum} alt="" />
                  <div className={styles.cardInputsDropTitle}>
                    ETH <span>(ERC-20)</span>
                    <Image src={DropDown} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.cardInput}>
                <div className={styles.cardInpTexts}>
                  <span>You Receive $FIX</span>5,255,460
                </div>
              </div>
            </div>
            <div className={styles.cardBtns}>
              <button className={styles.learnBtn}>
                Learn More About the PLP
              </button>
              <a href="#" className={styles.howToBuy}>
                How to Buy
              </a>
            </div>
          </div>

          <p className={styles.noteMob}>
            If in total 10,000 transactions contributed to $FIX pre-sale and you
            are amongst the first 2,000 (20%), then you get 30% bonus. If for
            example you are the 4123th transaction you get 10% bonus
          </p>

          <div className={styles.leaderboard}>
            <Image src={Leader} alt="" /> View Leaderboard
          </div>
        </div>
      </div>
    </div>
  );
}
