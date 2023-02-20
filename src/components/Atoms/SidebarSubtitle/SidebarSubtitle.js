import React from "react";
import DynamicHeroIcon from "../DynamicHeroIcon/DynamicHeroIcon";
import { PMedium } from "../Typography/Typography";

/**
 * This component represents Sidebar sub title.
 * 
 * TODO - handle clicking setting icon button
 * @param {string} iconName - Icon name of MenuItem
 * @param {string} content - Title of MenuItem
 * @param {number} width - width class - default is w-full.
 * @param {boolean} rightIcon - Show setting Icon
 * @param {string} color - The background color of menuitem
 * @param {function} onClick - Handling onClick event of subtitle button. 
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function SidebarSubtitle({
  iconName,
  content,
  width,
  rightIcon,
  color,
  onClick = () => console.error("You passed no action to the component"),
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-between items-center p-2 rounded ${
        width ?? "w-full"
      } bg-surface-${
        color ?? "base"
      }-light hover:bg-action-hover-light dark:bg-surface-${
        color ?? "base"
      }-dark dark:hover:bg-action-hover-dark`}
      {...rest}
    >
      <div className="flex">
        {iconName && (
          <div className="mr-3">
            <DynamicHeroIcon size={4} name={iconName} color={"secondary"} />
          </div>
        )}
        <PMedium color={"primary"}>
          {content}
        </PMedium>
      </div>
      {rightIcon && (
        <DynamicHeroIcon size={4} name={"Cog8ToothIcon"} color={"secondary"} />
      )}
    </button>
  );
}
