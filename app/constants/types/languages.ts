import usFlag from "@/public/flags/usa.png";
import saudiFlag from "@/public/flags/saudi-arabia.png";
import etFlag from "@/public/flags/ethiopia.png";
import { TLanguage } from "../type";

export const languages: TLanguage[] = [
  {
    image: usFlag,
    language: "English (US)",
    code: "en",
  },
  {
    image: saudiFlag,
    language: "العربية (SA)",
    code: "ar",
  },
  {
    image: etFlag,
    language: "አማርኛ (ET)",
    code: "am",
  },
];
