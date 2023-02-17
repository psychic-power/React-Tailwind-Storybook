import React from "react";
import { Color } from "../../../utils/theme";
import Avatar from "../Avatar/Avatar";

/**
 * This component represents button with avatar.
 *
 * @param {string} image - Image url of avatar. If url is empty it'll show avatar baseon username or undefined avatar.
 * @param {string} username - Username for name avatar
 * @param {number} size - Avatar size. "lg", "md", "sm"
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function ProfileButton({ image, username, size, ...rest }) {
  return (
    <button
      className={`flex justify-center items-center p-2 rounded w-fit ${Color.action.hover} ${Color.action.selected} ${Color.ring.primary} focus:ring-2`}
      {...rest}
    >
      <Avatar size={size} image={image} username={username} />
    </button>
  );
}
