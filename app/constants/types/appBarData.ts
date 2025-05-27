import { TAppBar } from "../type";
import haramaya from "@/public/images/logo.png";

export const appBarData: TAppBar = {
  logo: {
    src: haramaya,
    alt: "Walif Ethiopia Logo",
    width: 160,
    height: 60,
    className: "h-12 w-auto",
  },
  links: [
    { href: "#hero", label: "Home" },
    { href: "#features", label: "Services" },
    { href: "#testimonials", label: "Success Stories" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ],
  button: {
    href: "/auth/login",
    label: "Login",
  },
};
