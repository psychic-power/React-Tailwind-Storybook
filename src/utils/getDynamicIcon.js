import * as Icons from "@heroicons/react/24/solid"

const DynamicHeroIcon = ({ name, iconColor, size }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) { // Return a default one
    return <Icons.PlusIcon className={`h-${size} w-${size} ${iconColor}`} />;
  }

  return <IconComponent className={`h-${size} w-${size} ${iconColor}`} />;
};

export default DynamicHeroIcon;