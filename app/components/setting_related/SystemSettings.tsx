// components/SystemSettings.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCog,
  FaServer,
  FaShieldAlt,
  FaBell,
  FaUsersCog,
  FaSave,
  FaChevronDown,
  FaLock,
  FaPalette,
  FaPlug,
  FaUniversalAccess,
} from "react-icons/fa";
import SettingItem from "./SettingItem";
import { TSettingCategory, TSystemSetting } from "@/app/constants/type";

interface SystemSettingsProps {
  settings: TSystemSetting[];
  onSave: (updatedSettings: TSystemSetting[]) => void;
}

const SystemSettings: React.FC<SystemSettingsProps> = ({
  settings,
  onSave,
}) => {
  const [localSettings, setLocalSettings] =
    useState<TSystemSetting[]>(settings);
  const [isSaving, setIsSaving] = useState(false);
  const [activeCategory, setActiveCategory] = useState<TSettingCategory>(
    settings[0]?.category || "general"
  );

  const createSettingChangeHandler = (category: TSettingCategory) => {
    return (id: string, value: boolean | string | number) => {
      setLocalSettings((prev) =>
        prev.map((cat) => ({
          ...cat,
          settings: cat.settings.map((setting) =>
            setting.id === id ? { ...setting, value } : setting
          ),
        }))
      );
    };
  };

  const handleSave = () => {
    setIsSaving(true);
    onSave(localSettings);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const getCategoryIcon = (category: TSettingCategory) => {
    switch (category) {
      case "general":
        return <FaCog className="mr-2" />;
      case "security":
        return <FaShieldAlt className="mr-2" />;
      case "notifications":
        return <FaBell className="mr-2" />;
      case "performance":
        return <FaServer className="mr-2" />;
      case "appearance":
        return <FaPalette className="mr-2" />;
      case "integrations":
        return <FaPlug className="mr-2" />;
      case "privacy":
        return <FaLock className="mr-2" />;
      case "accessibility":
        return <FaUniversalAccess className="mr-2" />;
      default:
        return <FaCog className="mr-2" />;
    }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="bg-primary px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center">
            <FaUsersCog className="mr-3" />
            System Settings
          </h1>
          <motion.button
            onClick={handleSave}
            disabled={isSaving}
            className="mt-3 sm:mt-0 bg-white text-primary px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center disabled:opacity-70"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaSave className="mr-2" />
            {isSaving ? "Saving..." : "Save Changes"}
          </motion.button>
        </div>
      </div>

      {/* Settings Content */}
      <div className="p-4 sm:p-6">
        {/* Mobile: Accordion */}
        <div className="block sm:hidden space-y-4">
          {localSettings.map((category) => (
            <div
              key={category.category}
              className="border rounded-lg overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer">
                  <div className="flex items-center">
                    {getCategoryIcon(category.category)}
                    <span className="font-medium capitalize">
                      {category.category}
                    </span>
                  </div>
                  <FaChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="p-4 space-y-6">
                  {category.settings.map((setting) => (
                    <SettingItem
                      key={setting.id}
                      setting={setting}
                      onChange={createSettingChangeHandler(category.category)}
                    />
                  ))}
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* Desktop: Tabs */}
        <div className="hidden sm:block">
          <div className="flex space-x-4 border-b">
            {localSettings.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`px-4 py-2 font-medium capitalize border-b-2 transition-colors flex items-center ${
                  activeCategory === category.category
                    ? "border-primary text-primary"
                    : "border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-800"
                }`}
              >
                {getCategoryIcon(category.category)}
                {category.category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {localSettings
              .find((cat) => cat.category === activeCategory)
              ?.settings.map((setting) => (
                <SettingItem
                  key={setting.id}
                  setting={setting}
                  onChange={createSettingChangeHandler(activeCategory)}
                />
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SystemSettings;
