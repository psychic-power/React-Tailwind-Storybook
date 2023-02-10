import React from "react";
import AppTypography from "../AppTypography/AppTypography";

export default function AppCounter({ children, textClassName, bgClassName }) {
  const textColor = textClassName ? textClassName : "text-gray-900 dark:text-gray-50";
  const bgColor = bgClassName ? bgClassName : "bg-gray-100 dark:bg-gray-800"
  return (
    <div
      className={`flex justify-center items-center px-1 rounded w-fit ${bgColor}`}
    >
      <AppTypography type={"Caption"} colorClassName={textColor} >{children}</AppTypography>
    </div>
  );
}
