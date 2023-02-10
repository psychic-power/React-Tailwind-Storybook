import React from "react";
import AppAvatar from "../AppAvatar/AppAvatar";

export default function AppProfileButton({ avatar, iconClassName, bgClassName }) {
  const iconColor = iconClassName ? iconClassName : "text-gray-900  dark:text-white";
  const bgColor = bgClassName ? bgClassName : "bg-gray-200 opacity-50 hover:opacity-100 focus:opacity-100 focus:opacity-100 focus:ring-2 ring-gray-800 dark:bg-gray-800 dark:opacity-50 dark:hover:opacity-100 dark:focus:opacity-100 dark:ring-gray-50";
  return (
    <button
      className={`flex justify-center items-center p-2 rounded w-fit ${bgColor} ${iconColor}`}
    >
      <AppAvatar image={avatar} size={5} />
    </button>
  );
}
