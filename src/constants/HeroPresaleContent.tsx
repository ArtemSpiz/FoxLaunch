import TabIconSvg1 from "../assets/svg/TabIconSvg1.svg";
import TabIconSvg2 from "../assets/svg/TabIconSvg2.svg";
import TabIconSvg3 from "../assets/svg/TabIconSvg3.svg";

export const groups = [
  { group: "Group 1", bonus: "+30%", range: "First 20%" },
  { group: "Group 2", bonus: "+20%", range: "21%–30%" },
  { group: "Group 3", bonus: "+15%", range: "31%–40%" },
  { group: "Group 4", bonus: "+10%", range: "41%–50%" },
  { group: "Group 5", bonus: "+5%", range: "51%–100%" },
];

export const tabs = [
  {
    tab: "Buy",
    icon: TabIconSvg1,
    title: "Buy $FIX",
    subtitle: "1 $FIX = $0.005",
    content: "buy",
  },
  {
    tab: "Stake",
    icon: TabIconSvg2,
    title: "Stake",
    subtitle: "Up to 80% APY",
    content: "stake",
  },
  {
    tab: "History",
    icon: TabIconSvg3,
    title: "Transactions",
    content: "history",
  },
];

export const transactions = [
  {
    icon: TabIconSvg1,
    title: "$3.57",
    subtitle: "+11,900 $FIX",
    tag: "Pending",
  },
  {
    icon: TabIconSvg1,
    title: "$3.57",
    subtitle: "+11,900 $FIX",
    tag: "Completed",
  },
  {
    icon: TabIconSvg1,
    title: "$3.57",
    subtitle: "+11,900 $FIX",
    tag: "Completed",
  },
  {
    icon: TabIconSvg1,
    title: "$3.57",
    subtitle: "+11,900 $FIX",
    tag: "Completed",
  },
  {
    icon: TabIconSvg1,
    title: "$3.57",
    subtitle: "+11,900 $FIX",
    tag: "Completed",
  },
];

export const stakingData = {
  staked: "778,666 $FIX",
  daily: "778,666 $FIX",
  earnings: "43,732.86 $FIX",
  available: "742,392 $FIX",
};

export const heroNote =
  "If in total 10,000 transactions contributed to $FIX pre-sale and you are amongst the first 2,000 (20%), then you get 30% bonus. If for example you are the 4123th transaction you get 10% bonus";
