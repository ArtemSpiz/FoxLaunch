"use client";

import { useRouter } from "next/navigation";
import BlueButton from "../ui/BlueButton/BlueButton";
import styles from "./page.module.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.notFound}>
      <h1 className={`${styles.titleNotFound} title`}>404</h1>
      <p className={styles.subtitleNotFound}>Page not found</p>
      <BlueButton
        onClick={() => router.back()}
        text="Go Back"
        className={styles.btnNotFound}
      />
    </div>
  );
}
