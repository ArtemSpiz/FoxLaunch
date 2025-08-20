import styles from "./Made.module.css";
import Image from "next/image";
import madeGlow from "../../../assets/svg/MadeGlow.svg";
import MadeBlock from "./MadeBlock";

import MadeContent from "../../../constants/MadeContent";

export default function Made() {
  return (
    <div className={styles.madeWrapper}>
      <div className={`${styles.made} container`}>
        {MadeContent.map((card, index) => (
          <div key={index} className={styles.madeCardWrapper}>
            <MadeBlock card={card} isFirstImage={index === 1} />
          </div>
        ))}

        <div className={styles.madeGlow}>
          <Image src={madeGlow} alt="" />
        </div>

        <div className={styles.madeGlowMob}>
          <Image src={madeGlow} alt="" />
        </div>
      </div>
    </div>
  );
}
