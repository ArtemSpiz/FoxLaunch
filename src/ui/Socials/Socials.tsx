import styles from "./Socials.module.css";
import Image, { StaticImageData } from "next/image";

type SocialLink = {
  name: string;
  icon: string | StaticImageData;
  borderTop?: string | StaticImageData;
  borderBottom?: string | StaticImageData;
  iconClass?: string;
};

type SocialsProps = {
  links: SocialLink[];
  wrapperClass?: string;
};

export default function Socials({ links, wrapperClass = "" }: SocialsProps) {
  return (
    <div className={`${styles.socialIcons} `}>
      {links.map((link, i) => (
        <span className={`${styles.socialIcon} ${wrapperClass}`} key={i}>
          {link.borderTop && (
            <Image
              src={link.borderTop}
              alt=""
              className={`${styles.borderSocials} `}
              unoptimized
            />
          )}

          <Image
            src={link.icon}
            alt={link.name}
            className={`${styles.socialIconImg} ${link.iconClass || ""}`}
            unoptimized
          />

          {link.borderBottom && (
            <Image
              src={link.borderBottom}
              alt=""
              className={`${styles.borderSocials} ${styles.borderBottom}`}
              unoptimized
            />
          )}
        </span>
      ))}
    </div>
  );
}
