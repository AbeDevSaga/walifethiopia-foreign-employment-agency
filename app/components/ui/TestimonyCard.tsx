import { motion } from "framer-motion";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import { TTestimony } from "@/app/constants/type";

interface TestimonyProps {
  testimony: TTestimony;
  index: number;
}

const TestimonyCard = ({ testimony, index }: TestimonyProps) => {
  const colorClasses = {
    primary: "border-blue-200 bg-blue-50",
    secondary: "border-orange-200 bg-orange-50",
    neutral: "border-gray-200 bg-white",
  };

  const textColors = {
    primary: "text-blue-600",
    secondary: "text-orange-600",
    neutral: "text-gray-600",
  };

  const color = testimony.color || "neutral";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: testimony.delay || index * 0.1 }}
      className={`mb-6 md:mb-8 rounded-2xl border ${colorClasses[color]} p-6 shadow-sm hover:shadow-md transition-all`}
    >
      {/* Rating */}
      {testimony.rating && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${
                i < (testimony.rating ?? 0)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <p className={`text-lg md:text-xl italic mb-6 ${textColors[color]}`}>
        {`"${testimony.quote}"`}
      </p>

      {/* Profile */}
      <div className="flex items-center">
        {testimony.profileImage && (
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image
              src={testimony.profileImage}
              alt={testimony.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900">{testimony.name}</div>
          <div className="text-sm text-gray-600">
            {testimony.role}
            {testimony.company && ` • ${testimony.company}`}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonyCard;
