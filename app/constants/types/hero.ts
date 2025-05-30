import { THero } from "../type";
import bg from "@/public/images/bg.jpg";

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
  backgroundImage: bg,
  overlayColor: "bg-black/30",
  textColor: {
    primary: "text-white",
    secondary: "text-gray-200",
  },
  ctaButtons: [
    {
      text: {
        key: "hero.cta.agent_login",
        default: "Agent Login",
      },
      variant: "primary",
      href: "auth/login",
    },
    {
      text: {
        key: "hero.cta.our_process",
        default: "Learn More",
      },
      variant: "secondary",
      href: "#features",
    },
  ],
};
