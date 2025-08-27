"use client";

import React, { useState } from "react";
import styles from "./CryptoHero.module.css";
import Tableimg1 from "@/src/assets/img/Tableimg1.png";
import Tableimg2 from "@/src/assets/img/Tableimg2.png";
import Tableimg3 from "@/src/assets/img/Tableimg3.png";
import TableAccept from "@/src/assets/svg/TableAccept.svg";
import TableCross from "@/src/assets/svg/TableCross.svg";
import ArrowDown from "@/src/assets/svg/ArrowFaq.svg";
import BgVideo from "@/src/ui/BgVideo/BgVideo";
import ArrowBtn from "@/src/assets/svg/ArrowBtn.svg";
import Image from "next/image";
import TableGlow from "@/src/assets/img/tableGlow.png";

export default function CryptoHero({ mode = "platforms" }) {
  const [openRow, setOpenRow] = useState<number | null>(null);

  const toggleRow = (idx: number) => {
    setOpenRow(openRow === idx ? null : idx);
  };

  // --- Platforms Table (Current Default) ---
  const renderPlatformsTable = () => {
    const platforms = [
      {
        name: "Fundfix",
        logo: Tableimg1,
        token: "$FIX",
        marketcap: "-",
        features: [true, true, true, true, true, true, true, true],
      },
      {
        name: "Bitget",
        logo: Tableimg2,
        token: "$BGB",
        marketcap: "#24",
        features: [true, true, true, false, false, false, false, false],
      },
      {
        name: "Hyperliquid",
        logo: Tableimg3,
        token: "$HYPE",
        marketcap: "#27",
        features: [true, true, false, false, false, false, false, false],
      },
    ];

    const featureRows = [
      "Trade Crypto",
      "Leverage Trading",
      "Risk Management",
      "Forex",
      "Commodities",
      "Indices",
      "CFDs",
      "ETFs",
    ];

    return (
      <div className={styles.gridTableWrapper}>
        <div className={styles.gridTable}>
          <div className={styles.gridHeaderEmpty}></div>
          {platforms.map((platform, idx) => (
            <div key={idx} className={styles.gridHeader}>
              <img
                src={platform.logo.src}
                alt={platform.name}
                className={styles.logo}
              />
              <div className={styles.tableText}>{platform.name}</div>
            </div>
          ))}

          <div className={`${styles.gridRow} ${styles.tableText}`}>
            Token name
          </div>
          {platforms.map((p, idx) => (
            <div key={idx} className={`${styles.gridCell} ${styles.tableText}`}>
              {p.token}
            </div>
          ))}

          <div className={`${styles.gridRow} ${styles.tableText}`}>
            Marketcap
          </div>
          {platforms.map((p, idx) => (
            <div key={idx} className={`${styles.gridCell} ${styles.tableText}`}>
              {p.marketcap}
            </div>
          ))}

          {featureRows.map((feature, rowIdx) => (
            <React.Fragment key={rowIdx}>
              <div className={`${styles.gridRow} ${styles.tableText}`}>
                {feature}
              </div>
              {platforms.map((platform, colIdx) => (
                <div key={colIdx} className={styles.gridCell}>
                  <img
                    src={
                      platform.features[rowIdx]
                        ? TableAccept.src
                        : TableCross.src
                    }
                    alt={platform.features[rowIdx] ? "Yes" : "No"}
                    className={styles.icon}
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  // --- Trading Rules Table (New Mode) ---
  const renderTradingRulesTable = () => {
    const steps = [
      {
        title: "Step 1",
        subtitle: "Evaluation",
      },
      {
        title: "Step 2",
        subtitle: "Verification",
      },
      {
        title: "Step 3",
        subtitle: "Funded Account",
      },
    ];
    const rows = [
      {
        title: "Trading period",
        values: ["Unlimited", "Unlimited", "Unlimited"],
        desc: "We aim to minimize any unwarranted stress on our traders, which is why we've chosen to make the Trading Period entirely unlimited. With HyroTrader, you have the freedom to allocate as much time as necessary to attain your Profit target.",
      },
      {
        title: "Minimum trading days",
        values: ["10 days", "5 days", "-"],
        desc: "We aim to minimize any unwarranted stress on our traders, which is why we've chosen to make the Trading Period entirely unlimited. With HyroTrader, you have the freedom to allocate as much time as necessary to attain your Profit target.",
      },
      {
        title: "Stop loss obligation",
        values: ["Yes", "Yes", "Yes"],
        desc: "We aim to minimize any unwarranted stress on our traders, which is why we've chosen to make the Trading Period entirely unlimited. With HyroTrader, you have the freedom to allocate as much time as necessary to attain your Profit target.",
      },
      {
        title: "Daily drawdown",
        values: ["5%", "5%", "5%"],
        desc: "We aim to minimize any unwarranted stress on our traders, which is why we've chosen to make the Trading Period entirely unlimited. With HyroTrader, you have the freedom to allocate as much time as necessary to attain your Profit target.",
      },
      {
        title: "Maximum loss",
        values: ["10%", "10%", "10%"],
        desc: "We aim to minimize any unwarranted stress on our traders, which is why we've chosen to make the Trading Period entirely unlimited. With HyroTrader, you have the freedom to allocate as much time as necessary to attain your Profit target.",
      },
      {
        title: "Profit target",
        values: ["10%", "5%", "-"],
        desc: "We aim to minimize any unwarranted stress on our traders, which is why we've chosen to make the Trading Period entirely unlimited. With HyroTrader, you have the freedom to allocate as much time as necessary to attain your Profit target.",
      },
      {
        title: "Refundable fee",
        values: ["Challenge entry fee", "Free", "Refund"],
        desc: "We aim to minimize any unwarranted stress on our traders, which is why we've chosen to make the Trading Period entirely unlimited. With HyroTrader, you have the freedom to allocate as much time as necessary to attain your Profit target.",
      },
    ];

    return (
      <div className={styles.gridTableWrapper}>
        <div className={styles.rulesTableWrapper}>
          <div className={styles.rulesHeader}>
            <div className={styles.rulesHeaderEmpty}></div>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.rulesHeaderCell}>
                {step.title} <span>{step.subtitle}</span>
              </div>
            ))}
          </div>

          {rows.map((row, idx) => (
            <div key={idx} className={styles.rulesRow}>
              <div className={styles.rulesTitle} onClick={() => toggleRow(idx)}>
                {row.desc && (
                  <img
                    src={ArrowDown.src}
                    alt="toggle"
                    className={`${styles.arrow} ${
                      openRow === idx ? styles.open : ""
                    }`}
                  />
                )}
                {row.title}
              </div>
              {row.values.map((val, i) => (
                <div key={i} className={styles.rulesCell}>
                  {val}
                </div>
              ))}
              {openRow === idx && row.desc && (
                <div className={styles.rulesDescription}>{row.desc}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.cryptoHero} heroContainer`}>
      <div className={styles.top}>
        <div className={styles.glow}>
          <Image src={TableGlow} alt="image" />
        </div>
        <div className={styles.titleWrapper}>
          <div
            className={`${styles.title} title ${
              mode === "platforms" ? styles.platforms : " "
            }`}
          >
            {mode === "platforms"
              ? "Platforms Comparison"
              : "Trading rules of a crypto proprietary trading firm"}
          </div>
        </div>
        <div className={styles.void}></div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Eget mattis nulla id erat
          nulla nibh facilisis vel nisl. Est massa quam id cras semper
          ullamcorper sagittis fermentum suspendisse.{" "}
          {mode === "trading-rules" && (
            <div className={styles.wrapperBtns}>
              <button className={styles.btn1}>One-Step</button>
              <button className={styles.btn2}>
                Two-Step <Image src={ArrowBtn} alt="arrow" />
              </button>
            </div>
          )}
        </div>

        <BgVideo
          className={styles.bgVideoCrypto}
          src={
            mode === "platforms"
              ? "/videos/Video-10.mov"
              : "/videos/Video-12.mov"
          }
        />
      </div>

      {mode === "platforms"
        ? renderPlatformsTable()
        : renderTradingRulesTable()}
    </div>
  );
}
