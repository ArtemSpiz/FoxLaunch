"use client";

import styles from "./Header.module.css";
import ArrowBtn from "../../assets/svg/ArrowBtn.svg";
import Burger from "@/src/assets/svg/Burger.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const HeaderLinks = [
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Security", href: "/security" },
  { title: "About", href: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <Link href="/" className={styles.headerLogo}>
        Ffx
      </Link>

      <div className={styles.headerLinks}>
        {HeaderLinks.map((link, index) => (
          <Link href={link.href} className={styles.headerLink} key={index}>
            {link.title}
          </Link>
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
              <Link
                href={link.href}
                key={index}
                className={styles.headerLink}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
