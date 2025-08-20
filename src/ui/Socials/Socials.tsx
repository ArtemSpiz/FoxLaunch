import Border from "../Border/Border";
import styles from "./Socials.module.css";
import Image, { StaticImageData } from "next/image";

type SocialLink = {
  name: string;
  icon?: string | StaticImageData;
  iconClass?: string;
  text?: string;
};

type SocialsProps = {
  links: SocialLink[];
  wrapperClass?: string;
  stroke?: string;
};

export default function Socials({
  links,
  wrapperClass = "",
  stroke,
}: SocialsProps) {
  return (
    <div className={`${styles.socialIcons} `}>
      {links.map((link, i) => (
        <span className={`${styles.socialIcon} ${wrapperClass}`} key={i}>
          <Border stroke={stroke} />

          {link.icon && (
            <Image
              src={link.icon}
              alt={link.name}
              className={`${styles.socialIconImg} ${link.iconClass || ""}`}
              unoptimized
            />
          )}

          {link.text && <div className={styles.socialNumber}>{link.text}</div>}

          <Border stroke={stroke} classBorder={styles.borderBottom} />
        </span>
      ))}
    </div>
  );
}
