import Tableimg1 from "@/src/assets/img/Tableimg1.png";
import Tableimg2 from "@/src/assets/img/Tableimg2.png";
import Tableimg3 from "@/src/assets/img/Tableimg3.png";

export const platforms = [
  {
    name: "Fundfix",
    logo: Tableimg1,
    token: "$FIX",
    marketcap: "-",
    features: [true, true, true, true, true, true, true, true],
  },
  {
    name: "Bitget",
    logo: Tableimg2,
    token: "$BGB",
    marketcap: "#24",
    features: [true, true, true, false, false, false, false, false],
  },
  {
    name: "Hyperliquid",
    logo: Tableimg3,
    token: "$HYPE",
    marketcap: "#27",
    features: [true, true, false, false, false, false, false, false],
  },
];

export const featureRows = [
  "Trade Crypto",
  "Leverage Trading",
  "Risk Management",
  "Forex",
  "Commodities",
  "Indices",
  "CFDs",
  "ETFs",
];
