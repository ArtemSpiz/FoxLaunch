import BreakdownIcon1 from "../assets/svg/BreakdownIcon1.svg";
import BreakdownIcon2 from "../assets/svg/BreakdownIcon2.svg";
import BreakdownIcon3 from "../assets/svg/BreakdownIcon3.svg";
import BreakdownIcon4 from "../assets/svg/BreakdownIcon4.svg";
import BreakdownImg1 from "../assets/img/BreakdownImg1.png";
import BreakdownImg2 from "../assets/img/BreakdownImg2.png";
import BreakdownImg3 from "../assets/img/BreakdownImg3.png";

export const BreakdownCards = [
  {
    icon: BreakdownIcon1,
    title: "Private Sale",
    price: "$0.010 per $FIX",
    bonus: "Early Access",
    minInvestment: "$5,000",
    vesting: "10% at TGE, 90% over 6m",
  },
  {
    icon: BreakdownIcon2,
    title: "Pre-Sale",
    price: "$0.015 per $FIX",
    bonus: "20% Extra Tokens",
    minInvestment: "$500",
    vesting: "20% at TGE, 80% over 4m",
  },
  {
    icon: BreakdownIcon3,
    title: "Public Sale",
    price: "$0.015 per $FIX",
    bonus: "20% Extra Tokens",
    minInvestment: "$500",
    vesting: "20% at TGE, 80% over 4m",
  },
  {
    icon: BreakdownIcon4,
    title: "Pre-Sale",
    description:
      "By participating in the presale, you can secure early access, benefit from bonuses, and be part of Fundfix from the start. Our presale is structured to reward early participants and provide maximum value.",
    investors: [
      { image: BreakdownImg1, name: "Adam Smith", funded: "$40K" },
      { image: BreakdownImg2, name: "Luisa", funded: "$200K" },
      { image: BreakdownImg3, name: "Alex D&D", funded: "$40K" },
    ],
  },
  {
    icon: BreakdownIcon4,
    title: "$FIX Token",
    description:
      "The $FIX token is your key to accessing premium trading features, revenue-sharing opportunities, and more on the Fundfix platform.",
  },
];
