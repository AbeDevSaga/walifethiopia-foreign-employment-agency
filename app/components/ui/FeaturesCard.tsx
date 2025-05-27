import { TFeatures } from "@/app/constants/type";
import { motion } from "framer-motion";

interface FeaturesProps {
  feature: TFeatures;
  index: number;
}

const FeaturesCard = ({ feature, index }: FeaturesProps) => {
  const colors = {
    primary: "bg-blue-50 text-blue-600",
    secondary: "bg-orange-50 text-orange-600",
    tertiary: "bg-purple-50 text-purple-600"
  };

  const colorClass = feature.color 
    ? colors[feature.color as keyof typeof colors] 
    : "bg-gray-50 text-gray-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: feature.delay || index * 0.1 
      }}
      className="h-full"
    >
      <div className={`
        h-full p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all
        duration-300 border border-gray-100 overflow-hidden
        ${colorClass}
      `}>
        <div className="flex flex-col h-full">
          <div className="text-4xl mb-4 p-3 w-fit rounded-lg bg-white/50">
            {feature.icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            {feature.title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6 flex-grow">
            {feature.description}
          </p>
          <div className="mt-auto">
            <button className={`
              text-sm font-medium px-4 py-2 rounded-lg
              ${feature.color === 'primary' ? 'bg-blue-100 hover:bg-blue-200' :
                feature.color === 'secondary' ? 'bg-orange-100 hover:bg-orange-200' :
                'bg-gray-100 hover:bg-gray-200'}
              transition-colors
            `}>
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesCard;