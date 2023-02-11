import * as Icons from "@heroicons/react/24/solid"
import { TextColor } from "../../../utils/theme";

const DynamicHeroIcon = ({ name, size, color }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) { // Return a default one
    return <Icons.PlusIcon className={`h-${size} w-${size} ${TextColor[color ? color : "primary"]}`} />;
  }

  return <IconComponent className={`h-${size} w-${size} ${TextColor[color ? color : "primary"]}`} />;
};

export default DynamicHeroIcon;