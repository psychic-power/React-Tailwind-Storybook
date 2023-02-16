import React from "react";
import { PMedium } from "../Typography/Typography";

/**
 * This component represents individual tab.
 *
 * @param {string} name - Title of tabitem
 * @param {boolean} current - Current status of tab
 * @param {function} onItemClicked - Handle Tabitem on click event
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function TabItem({
  name,
  current = false,
  onItemClicked = () => console.error("You passed no action to the component"),
  ...rest
}) {
  if (current) {
    return (
      <li
        onClick={onItemClicked}
        className={`flex justify-center items-center cursor-pointer p-2 rounded w-fit bg-surface-overlay-light dark:bg-surface-overlay-dark shadow-sm `}
        {...rest}
      >
        <PMedium color={"primary"}>
          {name}
        </PMedium>
      </li>
    );
  } else {
    return (
      <li
        onClick={onItemClicked}
        className={`flex justify-center items-center cursor-pointer p-2 rounded w-fit bg-surface-base-light hover:bg-action-hover-light focus:bg-action-select-light dark:bg-surface-base-dark dark:hover:bg-action-hover-dark dark:focus:bg-action-select-dark focus:ring-gray-800 dark:focus:ring-gray-100 focus:ring-2 opacity-50`}
        {...rest}
      >
        <PMedium color={"primary"}>
          {name}
        </PMedium>
      </li>
    );
  }
}
