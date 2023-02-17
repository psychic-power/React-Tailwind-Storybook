import React from "react";
import { PlusIcon } from "../../../icons/icon";
import { Color, Size } from "../../../utils/theme";

/**
 * This component represents button with icon.
 *
 * @param {string} icon - Icon (svg or icon of library)
 * @param {number} size - Icon size and it's size is 4x of number
 * @param {string} color - The variant background color of icon button. Default is surface-base
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function IconButton({ icon, size, ...rest }) {
  return (
    <button
      className={`flex justify-center items-center p-0.5 rounded w-fit ${
        size ? Size.icon[size] : Size.icon.lg
      } ${Color.background.base} hover:${
        Color.action.hover
      } focus:${
        Color.action.selected
      } opacity-50 hover:opacity-100 focus:opacity-100 focus:${
        Color.ring.primary
      } ${Color.text.primary} focus:ring-2`}
      {...rest}
    >
      {icon}
    </button>
  );
}
