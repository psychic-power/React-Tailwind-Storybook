import React from "react";
import { Color, Size } from "../../../utils/theme";

/**
 * This component represents button with icon.
 *
 * @param {string} icon - Icon (svg or icon of library)
 * @param {number} size - Icon size and it's size is 4x of number
 * @param {string} color - The variant background color of icon button. Default is surface-base
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function IconButton({
  icon,
  onClick = () => {},
  size,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center p-0.5 rounded w-fit ${
        size ? Size.icon[size] : Size.icon.lg
      } ${Color.action.hover} ${
        Color.action.selected
      } opacity-50 hover:opacity-100 focus:opacity-100 ${Color.ring.primary} ${
        Color.text.primary
      } focus:ring-2`}
      {...rest}
    >
      {icon}
    </button>
  );
}
