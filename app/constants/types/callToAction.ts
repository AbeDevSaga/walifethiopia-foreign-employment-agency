import { TCallToAction } from "../type";

export const defaultCallToAction: TCallToAction = {
  title: "Ready to Transform Your Future?",
  description: "Join hundreds of successful candidates who found international opportunities through Walif Ethiopia.",
  backgroundColor: "primary",
  buttons: [
    {
      text: "Contact Us Now",
      variant: "solid",
      href: "/contact"
    },
    {
      text: "Call +251 912 345 678",
      variant: "outline",
      href: "tel:+251912345678"
    }
  ],
  textColor: {
    primary: "text-white",
    secondary: "text-gray-100",
    button: "text-white"
  }
};