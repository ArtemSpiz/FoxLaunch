import styles from "./Socials.module.css";
import snapchat from "../../assets/svg/Snapchat.svg";
import facebook from "../../assets/svg/Facebook.svg";
import youtube from "../../assets/svg/Youtube.svg";
import border from "../../assets/img/borderSocials.png";
import Image from "next/image";

const SocialsLinks = [
  { name: "Snapchat", icon: snapchat },
  { name: "Facebook", icon: facebook },
  { name: "YouTube", icon: youtube },
];

export default function Socials() {
  return (
    <a className={styles.socialIcons}>
      {SocialsLinks.map((link, i) => (
        <span className={styles.socialIcon} key={i}>
          <Image
            src={border}
            alt=" "
            className={styles.borderSocials}
            unoptimized
          />
          <Image
            src={link.icon}
            alt={link.name}
            className={styles.socialIconImg}
            unoptimized
          />

          <Image
            src={border}
            alt=" "
            className={`${styles.borderSocials} ${styles.borderBottom}`}
            unoptimized
          />
        </span>
      ))}
    </a>
  );
}
