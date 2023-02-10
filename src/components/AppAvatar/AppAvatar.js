import { UserIcon } from "@heroicons/react/24/solid";
import AppTypography from "../AppTypography/AppTypography";

export default function AppAvatar({ username, image, size }) {
  const nameSplit = username?.split(" ");
  const nameAvatar = nameSplit.map(item => item[0]);
  console.log("nameAvatar => ", nameAvatar);

  return (
    <div className={`rounded-full`}>
      {image ? (
        <img src={image} className={`rounded-full w-${size} h-${size} ring-2 `}/>
      ) : username ? (
        <div className={`rounded-full flex justify-center items-center text-gray-50 bg-gray-800 w-${size} h-${size}`}>
          <AppTypography colorClassName="text-gray-50">{nameAvatar}</AppTypography>
        </div>
      ) : (
        <div className="rounded-full w-fit bg-gray-300">
          <UserIcon className={`w-${size} h-${size} text-gray-800`} />
        </div>
      )}
    </div>
  );
}
