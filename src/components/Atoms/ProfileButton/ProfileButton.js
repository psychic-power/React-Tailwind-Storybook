import React from "react";
import Avatar from "../Avatar/Avatar";

/**
 * This component represents button with avatar.
 *
 * @param {string} image - Image url of avatar. If url is empty it'll show avatar baseon username or undefined avatar.
 * @param {string} username - Username for name avatar
 * @param {number} size - Avatar size based on tailwind css. e.g 4 means 16pixel.
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function ProfileButton({ image, username, size, ...rest }) {
  return (
    <button
      className={`flex justify-center items-center p-2 rounded w-fit bg-surface-base-light hover:bg-action-hover-light focus:bg-action-select-light dark:bg-surface-base-dark dark:hover:bg-action-hover-dark dark:focus:bg-action-select-dark focus:ring-gray-800 dark:focus:ring-gray-100 focus:ring-2`}
      {...rest}
    >
      <Avatar size={size} image={image} username={username} />
    </button>
  );
}
