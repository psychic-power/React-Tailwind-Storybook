import React from "react";
import Typography from "../Typography/Typography";

export default function TabItem({
  name,
  current = false,
  onItemClicked = () => console.error("You passed no action to the component"),
}) {
  if (current) {
    return (
      <li
        onClick={onItemClicked}
        className={`flex justify-center items-center cursor-pointer p-2 rounded w-fit bg-surface-overlay-light dark:bg-surface-overlay-dark shadow-sm `}
      >
        <Typography type={"pMedium"} color={"primary"}>
          {name}
        </Typography>
      </li>
    );
  } else {
    return (
      <li
        onClick={onItemClicked}
        className={`flex justify-center items-center cursor-pointer p-2 rounded w-fit bg-surface-base-light hover:bg-action-hover-light focus:bg-action-select-light dark:bg-surface-base-dark dark:hover:bg-action-hover-dark dark:focus:bg-action-select-dark focus:ring-gray-800 dark:focus:ring-gray-100 focus:ring-2 opacity-50`}
      >
        <Typography type={"pMedium"} color={"primary"}>
          {name}
        </Typography>
      </li>
    );
  }
}
