import { StaticImageData } from "next/image";

export type TTranslatable = string | { key: string; default: string };

export type TLanguage = {
  code: string;
  name: string;
  flag?: string | StaticImageData;
};

export type TNavLink = {
  href: string;
  label: string;
  className?: string;
};

export type TLogo = {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export type TButton = {
  href: string;
  label: string;
  className?: string;
};

export type TAppBar = {
  logo: TLogo;
  links: TNavLink[];
  button: TButton;
};

export type THero = {
  title: TTranslatable;
  description: TTranslatable;
  backgroundImage?: string | StaticImageData;
  overlayColor?: string;
  textColor?: {
    primary?: string;
    secondary?: string;
  };
  ctaButtons?: {
    text: TTranslatable;
    href: string;
    variant: "primary" | "secondary";
  }[];
};

export type TFeatures = {
  title: string;
  description: string;
  icon: string;
  color?: string;
  delay?: number;
};

export type TTestimony = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  profileImage?: string | StaticImageData;
  color?: 'primary' | 'secondary' | 'neutral';
  delay?: number;
  rating?: number;
};

export type TCallToAction = {
  title: string;
  description: string;
  backgroundColor?: 'primary' | 'secondary' | 'dark';
  backgroundImage?: string | StaticImageData;
  buttons: {
    text: string;
    variant: 'solid' | 'outline';
    onClick?: () => void;
    href?: string;
  }[];
  textColor?: {
    primary?: string;
    secondary?: string;
    button?: string;
  };
};


// Footer Section Types
export type TFooterLink = {
  title: string;
  href: string;
  external?: boolean;
};

export type TFooterSection = {
  title: string;
  links: TFooterLink[];
};

export type TSocialMedia = {
  platform: string;
  icon: string;
  href: string;
};

export type TFooterProps = {
  sections: TFooterSection[];
  socialMedia: TSocialMedia[];
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  copyrightText: string;
};