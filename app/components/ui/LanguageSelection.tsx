"use client";
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageSelectionProps {
  mobile?: boolean;
}

export const LanguageSelection = ({
  mobile = false,
}: LanguageSelectionProps) => {
  const { i18n } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isChanging, setIsChanging] = useState(false);
  const languageData = [
    { code: "en", name: "English" },
    { code: "am", name: "አማርኛ" },
    { code: "ar", name: "العربية" },
  ];
  // Sync language changes
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
      localStorage.setItem("lang", lng);
      setIsChanging(false);
    };

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  const changeLanguage = async (locale: string) => {
    setIsChanging(true);
    setIsOpen(false);
    await i18n.changeLanguage(locale);
  };

  return (
    <div className={`relative ${mobile ? "w-full" : "ml-4"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 text-gray-100 hover:text-white focus:outline-none ${
          mobile ? "w-full justify-between px-4 py-2" : ""
        }`}
        aria-label="Language selector"
        disabled={isChanging}
      >
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isChanging ? 0.9 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <GlobeAltIcon className="h-5 w-5" />
        </motion.div>

        {!mobile && (
          <motion.span
            key={currentLanguage}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.2 }}
            className="hidden md:inline ml-1"
          >
            {currentLanguage.toUpperCase()}
          </motion.span>
        )}

        {mobile && (
          <motion.span
            key={currentLanguage}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {languageData.find((l) => l.code === currentLanguage)?.name}
          </motion.span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className={`${
              mobile ? "relative mt-2 w-full" : "absolute right-0 mt-2 w-40"
            } bg-gray-800 rounded-md shadow-lg z-50 overflow-hidden`}
          >
            <div className="py-1">
              {languageData.map((language) => (
                <motion.button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    currentLanguage === language.code
                      ? "bg-gray-700 text-white"
                      : "text-gray-100 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <motion.div
                    key={language.code}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {language.name}
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading indicator */}
      <AnimatePresence>
        {isChanging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
