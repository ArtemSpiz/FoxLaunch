"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Socials from "@/src/ui/Socials/Socials";
import styles from "./WhoWeAre.module.css";
import whoCardImg3 from "../../../assets/img/whoCardImg3.png";
import whoBg from "../../../assets/img/whoBg.png";
import whoBgMob from "../../../assets/img/whoBgMob.png";

gsap.registerPlugin(ScrollTrigger);

const WhoWeCards = [
  {
    num: "01",
    title: "WE HAVE",
    image: whoCardImg3,
    subtitle: (
      <div className="whoCardSubtitle">
        {" "}
        <span>// combined extensive</span> <br /> {"MARKET EXPERIENCE, "}{" "}
        <span>with</span> {" CUTTING-EDGE TECHNOLOGY, "} <span>to build</span>{" "}
        {" A PLATFORM, "} <span>that delivers</span> {" POWERFUL RESULTS"}{" "}
      </div>
    ),
  },
  {
    num: "02",
    title: "WE HAVE",
    image: whoCardImg3,
    subtitle: (
      <div className="whoCardSubtitle">
        {" "}
        <span>// combined extensive</span> <br /> {"MARKET EXPERIENCE, "}{" "}
        <span>with</span> {" CUTTING-EDGE TECHNOLOGY, "} <span>to build</span>{" "}
        {" A PLATFORM, "} <span>that delivers</span> {" POWERFUL RESULTS"}{" "}
      </div>
    ),
  },
  {
    num: "03",
    title: "WE HAVE",
    image: whoCardImg3,
    subtitle: (
      <div className="whoCardSubtitle">
        {" "}
        <span>// combined extensive</span> <br /> {"MARKET EXPERIENCE, "}{" "}
        <span>with</span> {" CUTTING-EDGE TECHNOLOGY, "} <span>to build</span>{" "}
        {" A PLATFORM, "} <span>that delivers</span> {" POWERFUL RESULTS"}{" "}
      </div>
    ),
  },
  {
    num: "04",
    title: "WE HAVE",
    image: whoCardImg3,
    subtitle: (
      <div className="whoCardSubtitle">
        {" "}
        <span>// combined extensive</span> <br /> {"MARKET EXPERIENCE, "}{" "}
        <span>with</span> {" CUTTING-EDGE TECHNOLOGY, "} <span>to build</span>{" "}
        {" A PLATFORM, "} <span>that delivers</span> {" POWERFUL RESULTS"}{" "}
      </div>
    ),
  },
];

export default function WhoWeAre() {
  const [isMobile, setIsMobile] = useState(false);
  const [isBigDesktop, setIsBigDesktop] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsBigDesktop(window.innerWidth >= 1600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(WhoWeCards.length + 1) * 600}`,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              WhoWeCards.length - 1,
              Math.floor(progress * WhoWeCards.length)
            );
            setActiveIndex(index);
          },
        },
      });

      gsap.set(cardsRef.current, {
        width: !isBigDesktop ? 300 : 223,
        scaleY: 1,
        borderLeft: "1px solid #676767",
        background: "rgba(25, 35, 43, 0.45)",
        backdropFilter: "blur(10px)",
      });

      gsap.set(cardsRef.current[0], {
        width: !isBigDesktop ? 750 : 672,
        scaleY: 1.1,
        border: "1px solid #a5c6e2",
        background:
          "linear-gradient(65deg, rgba(0,0,0,0) 13.65%, rgba(54,161,255,0.4) 100.02%), rgba(0,0,0,0.27)",
        boxShadow: "0 0 44px 0 rgba(54,161,255,0.3)",
        backdropFilter: "blur(7.5px)",
      });

      cardsRef.current.forEach((card) => {
        const content = card.querySelectorAll(
          `.${styles.whoWeCardTitle}, .${styles.whoWeCardImg}, .${styles.whoWeCardSubtitle}`
        );
        gsap.set(content, { opacity: 0 });
      });
      gsap.set(
        cardsRef.current[0].querySelectorAll(
          `.${styles.whoWeCardTitle}, .${styles.whoWeCardImg}, .${styles.whoWeCardSubtitle}`
        ),
        { opacity: 1 }
      );

      cardsRef.current.forEach((card, i) => {
        if (i === 0) return;

        const prev = cardsRef.current[i - 1];
        const prevContent = prev.querySelectorAll(
          `.${styles.whoWeCardTitle}, .${styles.whoWeCardImg}, .${styles.whoWeCardSubtitle}`
        );
        const currContent = card.querySelectorAll(
          `.${styles.whoWeCardTitle}, .${styles.whoWeCardImg}, .${styles.whoWeCardSubtitle}`
        );

        tl.to(
          prev,
          {
            width: 223,
            scaleY: 1,
            borderColor: "#676767",
            background: "rgba(25, 35, 43, 0.45)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 0px rgba(0,0,0,0)",
            duration: 5,
            ease: "power4.inOut",
          },
          "+=0.3"
        )
          .to(
            card,
            {
              width: 672,
              scaleY: 1.1,
              borderColor: "#a5c6e2",
              background:
                "linear-gradient(65deg, rgba(0,0,0,0) 13.65%, rgba(54,161,255,0.4) 100.02%), rgba(0,0,0,0.27)",
              boxShadow: "0 0 44px rgba(54,161,255,0.3)",
              backdropFilter: "blur(7.5px)",
              duration: 5,
              ease: "power4.inOut",
            },
            "<"
          )
          .to(
            prevContent,
            { opacity: 0, duration: 2, ease: "power2.out" },
            "<1.5"
          )
          .to(
            currContent,
            { opacity: 1, duration: 2, ease: "power2.inOut" },
            "<"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;

    const container = carouselRef.current;

    const onScroll = () => {
      const children = Array.from(container.children) as HTMLDivElement[];
      const viewportCenter = window.innerWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, i) => {
        const center = container.offsetWidth / 2 + container.scrollLeft;

        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        let distance = Math.abs(center - childCenter);

        if (i === 0 && container.scrollLeft === 0) {
          distance = 0;
        }
        if (
          i === children.length - 1 &&
          container.scrollLeft + container.offsetWidth >= container.scrollWidth
        ) {
          distance = 0;
        }

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", onScroll);
    onScroll();
    return () => container.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <div className={styles.whoWe} ref={sectionRef}>
      <div className={styles.whoWeTexts}>
        <div className={`${styles.whoWeTitle} title`}>Who we are</div>
        <div className={styles.whoWeSubtitle}>
          FundFix backs traders with firm capital, offering fully funded
          accounts and uniting traditional and decentralized finance.
        </div>
      </div>

      <div className={styles.whoWeImg}>
        <Image src={isMobile ? whoBgMob : whoBg} alt="" />
      </div>

      <div
        className={`${styles.whoWeCards} ${
          isMobile ? styles.mobileCarousel : ""
        }`}
        ref={isMobile ? carouselRef : null}
      >
        {WhoWeCards.map((card, index) => (
          <div
            key={index}
            className={`${styles.whoWeCard} ${
              isMobile && activeIndex === index ? styles.activeCard : ""
            }`}
            ref={
              !isMobile
                ? (el) => {
                    if (el) cardsRef.current[index] = el;
                  }
                : null
            }
          >
            <div className={styles.whoWeCardTop}>
              <Socials
                enableHover={false}
                wrapperClass={styles.whoWeCardNum}
                stroke={
                  activeIndex === index
                    ? "#39A1FF"
                    : "rgba(255, 255, 255, 0.29)"
                }
                links={[{ name: "WhoCardNum", text: card.num }]}
              />
              <div className={styles.whoWeCardTitle}>{card.title}</div>
            </div>
            <div className={styles.whoWeCardImg}>
              <Image src={card.image} alt="" />
            </div>
            <div className={styles.whoWeCardSubtitle}>{card.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
