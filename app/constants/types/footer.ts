import { TFooterProps } from "../type";

export const defaultFooterData: TFooterProps = {
  sections: [
    {
      title: "Quick Links",
      links: [
        { title: "Home", href: "#hero" },
        { title: "Services", href: "#features" },
        { title: "Success", href: "#testimonials" },
        { title: "Contact", href: "#contact" }
      ]
    },
    // {
    //   title: "For Candidates",
    //   links: [
    //     { title: "Register", href: "/register" },
    //     { title: "Training Programs", href: "/training" },
    //     { title: "Job Listings", href: "/jobs" }
    //   ]
    // },
    {
      title: "For Agents",
      links: [
        { title: "Agent Login", href: "/agent/login" },
        { title: "Become an Agent", href: "/agent/register" },
        { title: "Resources", href: "/agent/resources" }
      ]
    }
  ],
  socialMedia: [
    { platform: "Facebook", icon: "facebook", href: "https://facebook.com/WalifEthiopia" },
    { platform: "Twitter", icon: "twitter", href: "https://twitter.com/WalifEthiopia" },
    { platform: "LinkedIn", icon: "linkedin", href: "https://linkedin.com/company/WalifEthiopia" },
    { platform: "Instagram", icon: "instagram", href: "https://instagram.com/WalifEthiopia" }
  ],
  contactInfo: {
    email: "info@WalifEthiopia.com",
    phone: "+251 912 345 678",
    address: "Addis Ababa, Ethiopia"
  },
  copyrightText: "© 2023 WalifEthiopia. All rights reserved."
};