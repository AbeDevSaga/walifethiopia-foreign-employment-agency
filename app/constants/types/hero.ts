import { THero } from "../type";

export const defaultHeroData: THero = {
  title: {
    key: "hero.title",
    default: "Connecting Ethiopian Talent with Global Opportunities",
  },
  description: {
    key: "hero.description",
    default:
      "WalifEthiopia empowers agents to match skilled professionals with international employers through our verified candidate network.",
  },
  backgroundImage: "/images/hero-bg.jpg",
  overlayColor: "bg-black/30",
  textColor: {
    primary: "text-white",
    secondary: "text-gray-200",
  },
};
