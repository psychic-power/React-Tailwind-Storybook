import * as Icons from "@heroicons/react/24/solid";
import { TextColor } from "../../../utils/theme";

/**
 * This component get icons from @heroicon module.
 *
 * @param {string} name - Hero icon name. e.g PlusIcon, Cog8ToothIcon, ChevronDownIcon etc
 * @param {number} size - The size of icon and it represent tailwind css classname. e.g number 4 means 16pixel
 * @param {string} color - The varient color of icons. Default is primary.
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

const DynamicHeroIcon = ({ name, size, color, ...rest }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return (
      <Icons.PlusIcon
        className={`h-${size} w-${size} ${
          TextColor[color ? color : "primary"]
        }`}
        {...rest}
      />
    );
  }

  return (
    <IconComponent
      className={`h-${size} w-${size} ${TextColor[color ? color : "primary"]}`}
      {...rest}
    />
  );
};

export default DynamicHeroIcon;
