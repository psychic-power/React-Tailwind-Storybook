import * as Icons from "@heroicons/react/24/solid";
import { TextColor } from "../../../utils/theme";

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
