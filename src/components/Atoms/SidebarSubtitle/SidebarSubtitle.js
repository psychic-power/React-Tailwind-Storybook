import React from "react";
import DynamicHeroIcon from "../DynamicHeroIcon/DynamicHeroIcon";
import Typography from "../Typography/Typography";

export default function SidebarSubtitle({
  iconName,
  content,
  rightIcon,
  ...rest
}) {
  return (
    <button
      className={`flex justify-between items-center p-2 rounded w-40 bg-surface-base-light hover:bg-action-hover-light dark:bg-surface-base-dark dark:hover:bg-action-hover-dark`}
      {...rest}
    >
      <div className="flex">
        {iconName && (
          <div className="mr-3">
            <DynamicHeroIcon size={4} name={iconName} color={"secondary"} />
          </div>
        )}
        <Typography type={"pMedium"} color={"primary"}>
          {content}
        </Typography>
      </div>
      {rightIcon && (
        <DynamicHeroIcon size={4} name={"Cog8ToothIcon"} color={"secondary"} />
      )}
    </button>
  );
}
