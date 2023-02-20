import React from "react";
import { badgeType, Color, Size } from "../../../utils/theme";

/**
 * This component represents button with icon.
 *
 * @param {string} icon - Icon (svg or icon of library)
 * @param {function} onClick - onClick event of button
 * @param {string} color - The variant background color of icon button. Default is surface-base
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function Button({
  icon,
  onClick = () => {},
  children,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center px-3 py-2 rounded w-fit ${Color.background.base} hover:${Color.action.hover} focus:${Color.action.selected} opacity-50 hover:opacity-100 focus:opacity-100 ${Color.ring.primary} ${Color.text.primary} ring-1 focus:ring-2`}
      {...rest}
    >
      {icon && (
        <div className={`${badgeType.icon.surface} ${Size.icon.sm} ${Color.icon} mr-1.5`}>
          {icon}
        </div>
      )}
      <p className="medium">{children}</p>
    </button>
  );
}
