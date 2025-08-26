"use client";

import styles from "./Header.module.css";
import ArrowBtn from "../../assets/svg/ArrowBtn.svg";
import Burger from "@/src/assets/svg/Burger.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import ArrowHeader from "@/src/assets/svg/ArrowHeder.svg";

const HeaderLinks = [
  { title: "Home", href: "/" },
  { title: "Presale", href: "/presale" },
  {
    title: "Features",
    arrow: true,
    links: [
      { title: "Crypto Prop Trading", href: "/crypto-prop-trading" },
      { title: "Prime", href: "/prime" },
      { title: "On Chain", href: "/on-chain" },
      { title: "Dashboards", href: "/dashboards" },
      { title: "AI Signals & Copy Trading", href: "/ai-signals" },
      { title: "Crypto Card Integration", href: "/crypto-card" },
    ],
  },
  { title: "Pricing", href: "/pricing" },
  {
    title: "About",
    arrow: true,
    links: [
      { title: "Company", href: "/company" },
      { title: "Team", href: "/team" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" },
    ],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLink, setIsOpenLink] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setIsOpenLink(isOpenLink === index ? null : index);
  };

  return (
    <div className={styles.header}>
      <Link href="/" className={styles.headerLogo}>
        Ffx
      </Link>

      <div className={styles.headerLinks}>
        {HeaderLinks.map((link, index) => (
          <div key={index} className={styles.headerLinkWrapper}>
            <Link
              href={link.href || "#"}
              className={styles.headerLink}
              onClick={
                link.arrow
                  ? (e) => {
                      e.preventDefault();
                      toggleDropdown(index);
                    }
                  : undefined
              }
            >
              {link.title}
              {link.arrow && (
                <div
                  className={`${styles.arrowIcon} ${
                    isOpenLink === index ? styles.open : ""
                  }`}
                >
                  <Image src={ArrowHeader} alt="arrow" />
                </div>
              )}
            </Link>

            <div
              className={`${styles.headerLinksOpenWrapper} ${
                isOpenLink === index ? styles.open : ""
              }`}
            >
              {isOpenLink === index && link.links && (
                <div
                  className={`${styles.headerLinksOpen} ${
                    isOpenLink === index ? styles.open : ""
                  }`}
                >
                  {link.links.map((subLink, subIndex) => (
                    <Link
                      href={subLink.href}
                      key={subIndex}
                      className={styles.headerLinksOpenLink}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{subLink.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
              <Link
                href={link.href || "#"}
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
