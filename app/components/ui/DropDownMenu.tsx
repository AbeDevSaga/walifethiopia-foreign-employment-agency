import {
  dropdownActions,
  DropdownFunctionKeys,
} from "@/app/utils/dropdownHelpers";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

interface DropDownMenuProps {
  label: string;
  actionKey: DropdownFunctionKeys;
  toggleMenu?: () => void;
}

function DropDownMenu({ label, actionKey, toggleMenu }: DropDownMenuProps) {
  const router = useRouter();
  const clickHandler = () => {
    const action = dropdownActions[actionKey];
    action();
    if (actionKey === "onViewProfile") {
      router.push("/dashboard/profile");
    }
    if (toggleMenu) {
      toggleMenu();
    }
  };
  return (
    <motion.p
      className="px-4 py-2 hover:text-primary cursor-pointer hover:bg-gray-100 rounded-md"
      whileHover={{ x: 2 }}
      onClick={clickHandler}
    >
      {label}
    </motion.p>
  );
}

export default DropDownMenu;
