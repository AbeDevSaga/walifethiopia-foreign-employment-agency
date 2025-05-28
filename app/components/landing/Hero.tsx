import { THero } from "@/app/constants/type";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

interface heroProps {
  hero: THero;
}

const Hero: React.FC<heroProps> = ({ hero }) => {
  const { t } = useTranslation("common");

  // Memoized translation function
  const getTranslatedContent = React.useCallback(
    (content: string | { key: string; default: string }) => {
      if (typeof content === "string") return content;
      return t(content.key, { defaultValue: content.default });
    },
    [t]
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 z-0 bg-gray-900" // Fallback background color
        style={{
          backgroundImage: hero.backgroundImage
            ? `url(${
                typeof hero.backgroundImage === "string"
                  ? hero.backgroundImage
                  : hero.backgroundImage.src
              })`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Optional: makes background fixed during scroll
        }}
      >
        {/* Optional: Add a loading state or fallback content */}
        {!hero.backgroundImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        )}
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${hero.overlayColor || ""}`}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${
              hero.textColor?.primary || "text-gray-900"
            }`}
          >
            {getTranslatedContent(hero.title)}
          </h1>
          <p
            className={`text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${
              hero.textColor?.secondary || "text-gray-600"
            }`}
          >
            {getTranslatedContent(hero.description)}
          </p>

          {/* Interactive Elements */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {hero.ctaButtons?.map((button, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href={button.href}
                  className={`inline-block ${
                    button.variant === "primary"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white hover:bg-gray-100 text-blue-600"
                  } px-8 py-3 rounded-lg text-lg font-semibold transition`}
                >
                  {getTranslatedContent(button.text)}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDownIcon className="h-8 w-8 text-white" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
