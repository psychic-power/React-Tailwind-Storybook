import React from "react";
import DynamicHeroIcon from "../DynamicHeroIcon/DynamicHeroIcon";

export default function IconButton({ iconName, size, ...rest }) {
  return (
    <button
      className={`flex justify-center items-center p-2 rounded w-fit bg-surface-base-light hover:bg-action-hover-light focus:bg-action-select-light opacity-50 dark:bg-surface-base-dark dark:hover:bg-action-hover-dark dark:focus:bg-action-select-dark hover:opacity-100 focus:opacity-100 focus:ring-gray-800 dark:focus:ring-gray-100 focus:ring-2`}
      {...rest}
    >
      <DynamicHeroIcon size={size ? size : 2.5} name={iconName} />
    </button>
  );
}
