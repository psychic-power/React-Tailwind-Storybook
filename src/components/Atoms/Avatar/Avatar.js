import { UserIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { BgColor, TextColor } from "../../../utils/theme";
import Typography from "../Typography/Typography";

export default function Avatar({ username, image, size }) {
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
        >
          <Typography type={"pMedium"} color={"primaryDark"}>
            {nameAvatar}
          </Typography>
        </div>
      ) : (
        <div className="rounded-full w-fit bg-surface-alt-light ring-gray-200 dark:ring-gray-50 ring-1">
          <UserIcon
            className={`w-${size} h-${size} p-1 text-content-tetriary-light`}
          />
        </div>
      )}
    </>
  );
}
