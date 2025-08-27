"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Create.module.css";
import createCross from "../../../assets/img/createCross.png";
import BlueButton from "@/src/ui/BlueButton/BlueButton";
import createImgRight from "../../../assets/img/createImgRight.png";
import createImgRightMob from "../../../assets/img/createImgRightMob.png";

export default function Create() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${styles.create} container`}>
      <div className={styles.createLeftImg}>
        <Image src={createCross} alt="image" />
      </div>

      <div className={styles.createCard}>
        <div className={styles.createCardContent}>
          <div className={styles.createCardText}>
            <div className={`${styles.createCardTitle} title`}>
              Create An Account
            </div>
            <div className={styles.createCardSubtitle}>
              $FIX token connects traders to premium features and
              revenue-sharing.
            </div>
          </div>

          <BlueButton
            text="Learn More About the PLP"
            className={styles.createCardBtn}
          />
        </div>

        <div className={styles.createCardImg}>
          <Image
            src={isMobile ? createImgRightMob : createImgRight}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
