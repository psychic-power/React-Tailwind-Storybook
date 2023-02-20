import React from "react";
import { CogIcon } from "../../../icons/icon";
import { Color, Size } from "../../../utils/theme";

/**
 * This component represents Sidebar sub title.
 * 
 * TODO - handle clicking setting icon button
 * @param {string} iconName - Icon name of MenuItem
 * @param {string} content - Title of MenuItem
 * @param {number} width - width class - default is w-full.
 * @param {boolean} setting - Show setting Icon
 * @param {string} color - The background color of menuitem
 * @param {function} onClick - Handling onClick event of subtitle button. 
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function SidebarSubtitle({
  icon,
  content,
  width,
  setting,
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
      <div className="flex mr-3">
        {icon && (
          <div className={`mr-3 ${Color.text.secondary}`}>
            {icon}
          </div>
        )}
        <p className={`medium ${Color.text.primary}`}>
          {content}
        </p>
      </div>
      {setting && (
        <div className={`${Color.text.secondary} ${Size.icon.sm} ${Color.icon}`}>
          <CogIcon />
        </div>
      )}
    </button>
  );
}
