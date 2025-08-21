import { ReactNode } from "react";
import Border from "../Border/Border";
import styles from "./Socials.module.css";
import Image, { StaticImageData } from "next/image";

type SocialLink = {
  name: string;
  icon?: string | StaticImageData;
  iconClass?: string;
  text?: string;
  component?: ReactNode;
  onClick?: () => void;
};

type SocialsProps = {
  links: SocialLink[];
  wrapperClass?: string;
  stroke?: string;
  enableHover?: boolean;
};

export default function Socials({
  links,
  wrapperClass = "",
  stroke,
  enableHover = true,
}: SocialsProps) {
  return (
    <div className={`${styles.socialIcons}`}>
      {links.map((link, i) => (
        <span
          className={`${styles.socialIcon} ${wrapperClass} ${
            enableHover ? styles.hoverEnabled : styles.hoverDisabled
          }`}
          key={i}
          onClick={link.onClick}
        >
          <Border stroke={stroke} />

          {link.component && link.component}

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
