"use client";
import SystemSettings from "@/app/components/setting_related/SystemSettings";
import { TSystemSetting } from "@/app/constants/type";
import { sampleSettings } from "@/app/constants/types/setting";
import React, { useState, useEffect } from "react";

function Settings() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleUpdateSettings = (updatedSettings: TSystemSetting[]) => {
    console.log("Updated settings:", updatedSettings);
  };

  if (!isMounted) {
    return (
      <div className="w-full h-full pb-2 relative mx-auto px-4">Loading...</div>
    );
  }

  return (
    <div className="w-full h-full pb-2 relative mx-auto px-4 overflow-auto scrollbar-hide">
      <SystemSettings settings={sampleSettings} onSave={handleUpdateSettings} />
    </div>
  );
}

export default Settings;
