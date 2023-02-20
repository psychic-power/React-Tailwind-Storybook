import React from "react";
import { Color } from "../../../utils/theme";

/**
 * This component represents individual tab.
 *
 * @param {string} name - Title of tabitem
 * @param {boolean} current - Current status of tab
 * @param {function} onClick - Handle Tabitem on click event
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function TabItem({
  item,
  active = false,
  onClick = () => console.error("You passed no action to the component"),
  ...rest
}) {
  console.log("item => ", item)
  if (active) {
    return (
      <button
        onClick={onClick}
        className={`flex justify-center items-center p-2 rounded w-fit bg-surface-overlay-light dark:bg-surface-overlay-dark shadow-sm `}
        {...rest}
      >
        {item?.icon && <div className={`${Color.text.primary} mr-2`}>{item?.icon}</div>}
        {item?.name && <p className={`medium ${Color.text.primary}`}>{item?.name}</p>}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`flex justify-center items-center p-2 rounded w-fit bg-surface-base-light hover:bg-action-hover-light focus:bg-action-select-light
         dark:bg-surface-base-dark dark:hover:bg-action-hover-dark dark:focus:bg-action-select-dark focus:ring-content-primary-light dark:focus:ring-content-primary-dark focus:ring-2 opacity-50 hover:opacity-100 focus:opacity-100`}
        {...rest}
      >
        {item?.icon && <div className={`${Color.text.primary} mr-2`}>{item?.icon}</div>}
        {item?.name && <p className={`medium ${Color.text.primary}`}>{item?.name}</p>}
      </button>
    );
  }
}
