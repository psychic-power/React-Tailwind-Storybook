import React from "react";
import { badgeType, Color, Size } from "../../../utils/theme";

/**
 * This component badge.
 *
 * @param {string} children - The content of the badge.
 * @param {string} type - The color of badge text - it includes surface, warning, success. Default is surface
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function Badge({ children, icon, type, ...rest }) {
  return (
    <div
      className={`flex justify-center items-center px-1.5 py-0.5 rounded w-fit ${
        type ? badgeType.background[type] : Color.background.alt
      }`}
      {...rest}
    >
      {icon && (
        <div
          className={`${
            type ? badgeType.icon[type] : badgeType.icon.surface
          } ${Size.icon.xs} mr-1.5`}
        >
          {icon}
        </div>
      )}
      <caption className={type ? badgeType.text[type] : badgeType.text.surface}>
        {children}
      </caption>
    </div>
  );
}
