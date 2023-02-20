import React from "react";
import { InboxIcon } from "../../../icons/icon";
import { Color, Size } from "../../../utils/theme";
import Badge from "../Badge/Badge";

/**
 * This component represents Menu Item.
 *
 * @param {string} icon - Icon of MenuItem
 * @param {string} content - Title of MenuItem
 * @param {number} count - Counter of MenuItem - right side
 * @param {number} width - width class - default is w-full.
 * @param {string} color - The background color of menuitem
 * @param {boolean} show - If this prop is true, shows MenuItem.
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function MenuItem({
  icon,
  content,
  count,
  width,
  color,
  show,
  onClick = () => {},
  ...rest
}) {
  {
    return (
      show && (
        <button
          onClick={onClick}
          className={`flex justify-between items-center p-2 rounded ${
            width ?? "w-full"
          } bg-surface-${
            color ?? "base"
          }-light hover:bg-action-hover-light focus:bg-action-select-light dark:bg-surface-${
            color ?? "base"
          }-dark dark:hover:bg-action-hover-dark dark:focus:bg-action-select-dark opacity-50 hover:opacity-75 focus:opacity-100`}
          {...rest}
        >
          <div className="flex justify-center items-center">
            {icon && (
              <div className={`mr-3 ${Size.icon.sm} ${Color.text.primary}`}>
                {icon}
              </div>
            )}
            <p className={`medium ${Color.text.primary}`}>{content}</p>
          </div>
          {count != 0 && <Badge>{count}</Badge>}
        </button>
      )
    );
  }
}
