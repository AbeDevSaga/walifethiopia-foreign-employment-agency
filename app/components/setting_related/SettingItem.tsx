// components/SettingItem.tsx
"use client";

import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { TSetting } from "@/app/constants/type";

interface SettingItemProps {
  setting: TSetting;
  onChange: (id: string, value: any) => void;
}

const SettingItem: React.FC<SettingItemProps> = ({ setting, onChange }) => {
  return (
    <motion.div
      className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ y: -2 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800">{setting.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{setting.description}</p>
        </div>
        {setting.type === "toggle" && (
          <Switch
            checked={setting.value as boolean}
            onChange={(value: boolean) => onChange(setting.id, value)}
            className={`${
              setting.value ? "bg-primary" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
          >
            <span
              className={`${
                setting.value ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        )}
      </div>

      {setting.type === "input" && (
        <input
          type="text"
          value={setting.value as string}
          onChange={(e) => onChange(setting.id, e.target.value)}
          className="mt-3 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {setting.type === "select" && setting.options && (
        <select
          value={setting.value as string}
          onChange={(e) => onChange(setting.id, e.target.value)}
          className="mt-3 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {setting.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </motion.div>
  );
};

export default SettingItem;
