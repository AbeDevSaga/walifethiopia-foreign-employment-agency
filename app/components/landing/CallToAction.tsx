"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TCallToAction } from "@/app/constants/type";

interface CallToActionProps {
  cta: TCallToAction;
}

const CallToAction: React.FC<CallToActionProps> = ({ cta }) => {
  const bgClasses = {
    primary: "bg-blue-600",
    secondary: "bg-orange-600",
    dark: "bg-gray-900",
  };

  const buttonClasses = {
    solid: `bg-white text-blue-600 hover:bg-gray-100`,
    outline: `border-2 ${cta.backgroundColor === "dark" ? "border-white" : "border-white"} hover:bg-opacity-20 ${cta.textColor?.button || "text-white"}`,
  };

  return (
    <section
      id="contact"
      className={`flex items-center justify-center min-h-screen ${
        bgClasses[cta.backgroundColor as keyof typeof bgClasses]
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${cta.textColor?.primary || "text-white"}`}>
          {cta.title}
        </h2>
        <p className={`text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${cta.textColor?.secondary || "text-gray-100"}`}>
          {cta.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 space-y-4 ">
          {cta.buttons.map((button, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {button.href ? (
                <Link
                  href={button.href}
                  className={`px-8 py-3 rounded-lg text-lg font-medium transition-all ${
                    buttonClasses[button.variant]
                  }`}
                >
                  {button.text}
                </Link>
              ) : (
                <button
                  onClick={button.onClick}
                  className={`px-8 py-3 rounded-lg text-lg font-medium transition-all ${
                    buttonClasses[button.variant]
                  }`}
                >
                  {button.text}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;