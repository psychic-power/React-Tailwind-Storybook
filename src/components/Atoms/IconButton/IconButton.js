import React from "react";
import DynamicHeroIcon from "../DynamicHeroIcon/DynamicHeroIcon";

/**
 * This component represents button with icon.
 *
 * @param {string} iconName - Icon name
 * @param {number} size - Icon size and it's size is 4x of number
 * @param {string} color - The variant background color of icon button. Default is surface-base
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function IconButton({ iconName, size, color, ...rest }) {
  return (
    <button
      className={`flex justify-center items-center p-2 rounded w-fit bg-surface-${color??"base"}-light hover:bg-action-hover-light focus:bg-action-select-light opacity-50 dark:bg-surface-${color??"base"}-dark dark:hover:bg-action-hover-dark dark:focus:bg-action-select-dark hover:opacity-100 focus:opacity-100 focus:ring-gray-800 dark:focus:ring-gray-100 focus:ring-2`}
      {...rest}
    >
      <DynamicHeroIcon size={size ? size : 2.5} name={iconName} />
    </button>
  );
}
