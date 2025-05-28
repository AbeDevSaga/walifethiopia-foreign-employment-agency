"use client";
import { toggleTheme, setTheme } from "@/app/redux/slices/themeSlice";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function Theme() {
  const dispatch = useDispatch();
  const theme = useSelector((state: { theme: string }) => state.theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get theme from localStorage if available
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  useEffect(() => {
    if (mounted) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme, mounted]);

  if (!mounted) {
    // Return a placeholder with matching dimensions to prevent layout shift
    return (
      <div className="relative border rounded-lg bg-white color p-2">
        <div className="w-5 h-5" />
      </div>
    );
  }

  return (
    <div className="relative border rounded-lg bg-white color p-2">
      {theme === "dark" ? (
        <FaMoon
          className="w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors"
          onClick={() => dispatch(toggleTheme())}
        />
      ) : (
        <FaSun
          className="w-5 h-5 text-yellow-500 hover:text-yellow-300 transition-colors"
          onClick={() => dispatch(toggleTheme())}
        />
      )}
    </div>
  );
}

export default Theme;
