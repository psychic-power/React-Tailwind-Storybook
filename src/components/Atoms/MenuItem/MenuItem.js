import React from "react";
import DynamicHeroIcon from "../DynamicHeroIcon/DynamicHeroIcon";
import Typography, { PMedium } from "../Typography/Typography";
import Counter from "../Counter/Counter";

/**
 * This component represents Menu Item.
 *
 * @param {string} iconName - Icon name of MenuItem
 * @param {string} content - Title of MenuItem
 * @param {number} count - Counter of MenuItem - right side
 * @param {number} width - width class - default is w-full.
 * @param {string} color - The background color of menuitem
 * @param {boolean} show - If this prop is true, shows MenuItem. 
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function MenuItem({
  iconName,
  content,
  count,
  width,
  color,
  show,
  ...rest
}) {
  {
    return (
      show && (
        <button
          className={`flex justify-between items-center p-2 rounded ${
            width ?? "w-full"
          } bg-surface-${
            color ?? "base"
          }-light hover:bg-action-hover-light focus:bg-action-select-light dark:bg-surface-${
            color ?? "base"
          }-dark dark:hover:bg-action-hover-dark dark:focus:bg-action-select-dark`}
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
          {(count || count !== 0) && (
            <div>
              <Counter bgColor={"select"}>{count}</Counter>
            </div>
          )}
        </button>
      )
    );
  }
}
