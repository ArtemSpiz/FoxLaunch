import Image from "next/image";
import styles from "./Footer.module.css";
import FooterLogo from "../../assets/svg/FooterLogo.svg";
import Socials from "@/src/ui/Socials/Socials";
import snapchat from "../../assets/svg/Snapchat.svg";
import facebook from "../../assets/svg/Facebook.svg";
import youtube from "../../assets/svg/Youtube.svg";
import Link from "next/link";
import { FooterLinks } from "@/src/constants/FooterLinks";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.footerLogo}>
          <Image src={FooterLogo} alt="image" />
        </div>
        <Socials
          links={[
            {
              name: "Snapchat",
              icon: snapchat,
            },
            {
              name: "Facebook",
              icon: facebook,
            },
            {
              name: "YouTube",
              icon: youtube,
            },
          ]}
          stroke="rgba(255, 255, 255, 0.46)"
        />{" "}
      </div>

      <div className={styles.footerLinksWrapper}>
        {FooterLinks.map((linkCol, index) => (
          <div className={styles.footerLinks} key={index}>
            {linkCol.links.map((link, i) => (
              <Link href={link.href} className={styles.footerLink} key={i}>
                {link.link}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
