import { StaticImageData } from "next/image";

export type TTranslatable = string | { key: string; default: string };

export type TRole = "admin" | "super-admin" | "agent" | "candidate";
export type TActionButtonIcons =
  | "logout"
  | "user"
  | "edit"
  | "delete"
  | "update"
  | "add_user"
  | "service"
  | "upload"
  | "calendar";

// Common Types
export type TNavigationItem = {
  label: TTranslatable;
  path: string;
  icon: string;
};
export type TCompany = {
  name: string;
  description: TTranslatable;
  logo?: string | StaticImageData;
  website?: string;
  location?: string;
};
export type THeadline = {
  title: string;
  description: string;
  image?: string | StaticImageData;
  imageAlt?: string;
};

export type TLanguage = {
  image: StaticImageData;
  language: string;
  code: string;
};

export type TNavLink = {
  href: string;
  label: TTranslatable;
  className?: string;
};

export type TLogo = {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export type TTestimony = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  profileImage?: string | StaticImageData;
  color?: "primary" | "secondary" | "neutral";
  delay?: number;
  rating?: number;
};

export type TFeatures = {
  title: string;
  description: string;
  icon: string;
  color?: string;
  delay?: number;
};
// Components Types
export type TLable = {
  text: TTranslatable;
  className?: string;
};
export type TActionButton = {
  label: TTranslatable;
  icon?: TActionButtonIcons;
  onClick?: () => void;
  isCollapsed?: boolean;
};
export type TButton = {
  href: string;
  label: TTranslatable;
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

export type TTestimonal = {
  header: THeadline;
  testimonies: TTestimony[];
};

export type TFeatureSection = {
  header: THeadline;
  features: TFeatures[];
};

export type TCallToAction = {
  title: string;
  description: string;
  backgroundColor?: "primary" | "secondary" | "dark";
  backgroundImage?: string | StaticImageData;
  buttons: {
    text: string;
    variant: "solid" | "outline";
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
  title: TTranslatable;
  href: string;
  external?: boolean;
};

export type TFooterSection = {
  title: TTranslatable;
  links: TFooterLink[];
};

export type TSocialMedia = {
  platform: string;
  icon: string;
  href: string;
};

export type TFooterProps = {
  company: TCompany;
  sections: TFooterSection[];
  socialMedia: TSocialMedia[];
  contactInfo: {
    email: string;
    phone: string;
    address: TTranslatable;
  };
  copyrightText: TTranslatable;
  liscense?: TTranslatable;
};

// User Section Types
export type TProfile = {
  name: string;
  email: string;
  phone: string;
  image: StaticImageData;
  role: string;
  password: string;
  date: string;
};

export type TUser = {
  _id?: string;
  name: string;
  email: string;
  role: TRole;
  profileImage?: string | StaticImageData;
  phone?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
