"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./HeroPresale.module.css";

import Leader from "../../../assets/svg/Leader.svg";
import heroPresaleLine from "../../../assets/img/heroPresaleLine.png";
import infoCircle from "../../../assets/svg/infoCircle.svg";
import Ethereum from "../../../assets/svg/Ethereum.svg";
import DropDown from "../../../assets/svg/DropDown.svg";
import Socials from "@/src/ui/Socials/Socials";
import BgVideo from "@/src/ui/BgVideo/BgVideo";
import { groups, heroNote, stakingData, tabs, transactions } from "@/src/constants/HeroPresaleContent";

export default function HeroPresale() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [ethAmount, setEthAmount] = useState(1);
  const [fixAmount, setFixAmount] = useState("0");
  const [fade, setFade] = useState(false);
  const pricePerFix = 0.005;
  const ethToUsd = 2000;

  useEffect(() => {
    setFixAmount(
      ((ethAmount * ethToUsd) / pricePerFix).toLocaleString("en-US")
    );
  }, [ethAmount]);

  const currentTab = tabs.find((t) => t.tab === activeTab) || tabs[0];

  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => setFade(true), 10);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className={`${styles.heroPresaleWrapper} heroContainer`}>
      <div className={`${styles.heroPresale} `}>
        <div className={`${styles.heroContentWrapper} heroContainerMob`}>
          <div className={`${styles.heroPresaleGrid1} ${styles.heroPresCont}`}>
            <h1 className={styles.title}>Join the $FIX token presale</h1>
          </div>

          <div className={`${styles.heroPresaleGrid2} ${styles.heroPresCont}`}>
            <div className={styles.groups}>
              {groups.map((item, i) => (
                <div key={i} className={styles.group}>
                  <div className={styles.groupName}>{item.group}</div>
                  <div className={styles.bonus}>$FIX {item.bonus}</div>
                  <div className={styles.range}>{item.range}</div>
                </div>
              ))}
            </div>
            <p className={styles.note}>{heroNote}</p>
          </div>

          <div className={styles.heroPresaleGrid3}>
            <div className={styles.grid3Card}>
              {/* Tabs */}
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
                      <Image src={tab.icon} alt="image" />
                    </div>
                    {tab.tab}
                  </div>
                ))}
              </div>

              {/* Card Content */}
              <div className={`${styles.cardBuy} `}>
                <div className={`${styles.cardTitles}`}>
                  <div className={styles.cardTitle}>{currentTab.title}</div>
                  {currentTab.subtitle && (
                    <div className={styles.cardSubtitle}>
                      {currentTab.subtitle}
                    </div>
                  )}
                </div>

                {/* Buy Content */}
                {currentTab.content === "buy" && (
                  <>
                    <div
                      className={`${styles.cardBuyBot} ${
                        activeTab === "Buy" ? styles.fadeEnter : ""
                      }`}
                    >
                      <div className={styles.cardLine}>
                        <Image src={heroPresaleLine} alt="image" />
                      </div>
                      <div className={styles.cardText}>
                        USD Raised
                        <span>
                          $1,252.532 / <span>2,000.000</span>$
                        </span>
                      </div>
                    </div>

                    <div
                      className={`${styles.cardInputs} ${
                        activeTab === "Buy" ? styles.fadeEnter : ""
                      }`}
                    >
                      <div className={styles.cardInputsTitle}>
                        <Image src={infoCircle} alt="image" /> your purchased
                        $FIX = 0
                      </div>
                      <div className={styles.cardInput}>
                        <div className={styles.cardInpTexts}>
                          <span>You pay</span>
                          <input
                            className={styles.inputPresale}
                            value={ethAmount}
                            onChange={(e) =>
                              setEthAmount(Number(e.target.value))
                            }
                          />
                        </div>
                        <div className={styles.cardInputsDrop}>
                          <Image src={Ethereum} alt="image" />
                          <div className={styles.cardInputsDropTitle}>
                            ETH <span>(ERC-20)</span>
                            <Image src={DropDown} alt="image" />
                          </div>
                        </div>
                      </div>
                      <div className={styles.cardInput}>
                        <div className={styles.cardInpTexts}>
                          <span>You Receive $FIX</span>
                          {fixAmount}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Stake Content */}
                {currentTab.content === "stake" && (
                  <>
                    <div
                      className={`${styles.cardStakeBot} ${
                        activeTab === "Stake" ? styles.fadeEnter : ""
                      }`}
                    >
                      <div className={styles.cardStakeBotRow}>
                        Staked <span>{stakingData.staked}</span>
                      </div>
                      <div className={styles.cardStakeBotRow}>
                        Daily Staking <span>{stakingData.daily}</span>
                      </div>
                      <div className={styles.cardStakeBotRow}>
                        Total Earnings <span>{stakingData.earnings}</span>
                      </div>
                    </div>

                    <div
                      className={`${styles.cardInputs} ${
                        activeTab === "Stake" ? styles.fadeEnter : ""
                      }`}
                    >
                      <div className={styles.cardInputsTitle}>
                        <Image src={infoCircle} alt="image" /> Available to
                        Stake: {stakingData.available}
                      </div>
                      <div className={styles.cardInput}>
                        <div className={styles.cardInpTexts}>
                          <span>Enter amount</span>
                          <input
                            className={styles.inputPresale}
                            value={ethAmount}
                            onChange={(e) =>
                              setEthAmount(Number(e.target.value))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* History Content */}
                {currentTab.content === "history" && (
                  <div
                    className={`${styles.cardHistoryBot} ${
                      activeTab === "History" ? styles.fadeEnter : ""
                    }`}
                  >
                    {transactions.map((row, index) => (
                      <div className={styles.cardHistoryRow} key={index}>
                        <Socials
                          links={[{ name: "cardIcon", icon: row.icon }]}
                          wrapperClass={styles.cardHistoryIcon}
                          stroke="#A5C6E2"
                        />
                        <div className={styles.cardHistoryTitle}>
                          {row.title} <span>{row.subtitle}</span>
                        </div>
                        <div
                          className={`${styles.cardHistoryTag} ${
                            row.tag === "Pending" ? styles.Pending : ""
                          }`}
                        >
                          {row.tag}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className={styles.cardBtns}>
                {currentTab.content === "buy" && (
                  <>
                    <button className={styles.learnBtn}>
                      Learn More About the PLP
                    </button>
                    <a href="#" className={styles.howToBuy}>
                      How to Buy
                    </a>
                  </>
                )}
                {currentTab.content === "stake" && (
                  <>
                    <button className={styles.learnBtn}>Stake</button>
                    <a href="#" className={styles.howToBuy}>
                      Unstake
                    </a>
                  </>
                )}
              </div>
            </div>

            <p className={styles.noteMob}>{heroNote}</p>

            <div className={styles.leaderboard}>
              <Image src={Leader} alt="image" /> View Leaderboard
            </div>
          </div>
        </div>
        <BgVideo
          srcMp4="/videos/mp4/Video-01.mp4"
          srcWebm="/videos/webm/Video-01.webm"
          src="/videos/Video-01.mov"
        />
      </div>
    </div>
  );
}
