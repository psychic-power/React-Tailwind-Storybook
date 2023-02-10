import React from "react";
import DynamicHeroIcon from "../../utils/getDynamicIcon";
import AppTypography from "../AppTypography/AppTypography"

export default function AppMenuItem({ icon, type, child, textClassName, bgClassName, size }) {
  const classNames =
    (textClassName ? textClassName : "text-gray-600 dark:text-gray-100") +
    " " +
    (bgClassName ? bgClassName : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600");
  return (
    <div
      className={`flex flex-row items-center space-x-4 p-2 cursor-pointer pr-40 w-fit  ${classNames}`}
    >
      {icon && (
        <DynamicHeroIcon size={size} name={icon} iconColor={textClassName} />
      )}
      <AppTypography type={type} colorClassName={textClassName ? textClassName : "text-gray-600 dark:text-gray-100"} >{child}</AppTypography>
    </div>
  );
}
