"use client";

import styles from "./Header.module.css";
import ArrowBtn from "../../assets/svg/ArrowBtn.svg";
import Burger from "@/src/assets/svg/Burger.svg";
import Image from "next/image";
import { useState } from "react";

const HeaderLinks = [
  { title: "Features" },
  { title: "Pricing" },
  { title: "Security" },
  { title: "About" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>Ffx</div>

      <div className={styles.headerLinks}>
        {HeaderLinks.map((link, index) => (
          <div className={styles.headerLink} key={index}>
            {link.title}
          </div>
        ))}
      </div>

      <div className={styles.headerBtns}>
        <button className={styles.headerLogInBtn}>Log in</button>
        <button className={styles.headerWhiteBtn}>
          Get started <Image src={ArrowBtn} alt="arrow" />
        </button>
        <div className={styles.headerBurger} onClick={() => setIsOpen(!isOpen)}>
          <Image src={Burger} alt="burger" />
        </div>
      </div>

      {isOpen && (
        <div className={styles.headerBurgerMenu}>
          <div className={styles.headerLinksMob}>
            {HeaderLinks.map((link, index) => (
              <div className={styles.headerLink} key={index}>
                {link.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
