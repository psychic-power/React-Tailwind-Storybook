import { UserIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { BgColor, TextColor } from "../../../utils/theme";
import { PMedium } from "../Typography/Typography";

/**
 * This component represents a user avatars.
 *
 * @param {string} username - If the image not exist, show avatar with name (e.g John Doe - JD)
 * @param {string} image - The image source (e.g https://images/abc.png).
 * @param {number} size - The variant of the avatar (it increases with 4x pixel of value).
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function Avatar({ username, image, size, ...rest }) {
  const [nameAvatar, setNameAvatar] = useState("");
  useEffect(() => {
    setNameAvatar(username?.split(" ")?.map((item) => item[0]));
    if (nameAvatar?.length > 2) {
      setNameAvatar(nameAvatar[0] + nameAvatar[1]);
    }
  }, [username]);

  return (
    <>
      {image ? (
        <div
          className={`ring-gray-200 ring-1 rounded-full w-fit w-${size} h-${size}`}
          {...rest}
        >
          <img
            src={image}
            alt="avatar"
            className={`rounded-full w-${size} h-${size}`}
          />
        </div>
      ) : username ? (
        <div
          className={`flex justify-center items-center rounded-full ring-gray-200 ring-1 w-${size} h-${size} ${BgColor["altDark"]}`}
          {...rest}
        >
          <PMedium color={"primaryDark"}>
            {nameAvatar}
          </PMedium>
        </div>
      ) : (
        <div
          className="rounded-full w-fit bg-surface-alt-light ring-gray-200 dark:ring-gray-50 ring-1"
          {...rest}
        >
          <UserIcon
            className={`w-${size} h-${size} p-1 text-content-tetriary-light`}
          />
        </div>
      )}
    </>
  );
}
