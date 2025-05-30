import { TFooterProps } from "../type";

export const defaultFooterData: TFooterProps = {
  company: {
    name: "WalifEthiopia",
    description: {
      key: "footer.description",
      default:
        "Connecting Ethiopian talent with global opportunities through professional training and placement services.",
    },
  },
  sections: [
    {
      title: { key: "footer.quick_links", default: "Quick Links" },
      links: [
        { title: { key: "link.hero", default: "Home" }, href: "#hero" },
        {
          title: { key: "link.features", default: "Services" },
          href: "#features",
        },
        {
          title: { key: "link.testimonials", default: "Success Stories" },
          href: "#testimonials",
        },
        {
          title: { key: "link.contact", default: "Contact Us" },
          href: "#contact",
        },
      ],
    },
    {
      title: { key: "footer.for_agents", default: "For Agents" },
      links: [
        {
          title: { key: "link.agent_login", default: "Agent Login" },
          href: "/auth/login",
        },
        {
          title: { key: "link.agent_register", default: "Become an Agent" },
          href: "/auth/register",
        },
        {
          title: { key: "link.resources", default: "Resources" },
          href: "/resources",
        },
      ],
    },
  ],
  socialMedia: [
    {
      platform: "Facebook",
      icon: "facebook",
      href: "https://facebook.com/WalifEthiopia",
    },
    {
      platform: "Twitter",
      icon: "twitter",
      href: "https://twitter.com/WalifEthiopia",
    },
    {
      platform: "LinkedIn",
      icon: "linkedin",
      href: "https://linkedin.com/company/WalifEthiopia",
    },
    {
      platform: "Instagram",
      icon: "instagram",
      href: "https://instagram.com/WalifEthiopia",
    },
  ],
  contactInfo: {
    email: "info@WalifEthiopia.com",
    phone: "+251 912 345 678",
    address: { key: "footer.address", default: "Addis Ababa, Ethiopia" },
  },
  copyrightText: {
    key: "footer.copyright",
    default: "© 2023 WalifEthiopia. All rights reserved.",
  },
  liscense: {
    key: "footer.liscense",
    default: "Licensed by Ethiopian Ministry of Labor and Skills",
  },
};
