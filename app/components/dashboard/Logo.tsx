import React from "react";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TLogo } from "@/app/constants/type";

interface LogoProps {
  onToggleSidebar: () => void;
  logo: TLogo;
}

function Logo({ onToggleSidebar, logo }: LogoProps) {
  return (
    <div className="flex-shrink-0 px-4 py-3 border-b border-gray-700">
      <div className="flex items-center justify-between lg:justify-center">
        <Link href="/" className="flex items-center" onClick={onToggleSidebar}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120} 
            height={48}
            className="h-8 w-auto lg:h-12"
          />
        </Link>
        <button
          type="button"
          className="-m-2.5 p-2.5 lg:hidden text-gray-600 p-2 rounded-md hover:text-gray-800 transition-colors"
          onClick={onToggleSidebar}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default Logo;
