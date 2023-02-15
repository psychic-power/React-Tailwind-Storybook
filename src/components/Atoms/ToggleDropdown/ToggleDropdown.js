import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import SidebarSubtitle from "../SidebarSubtitle/SidebarSubtitle";

export default function ToggleDropdown({
  title,
  rightIcon,
  width,
  color,
  items,
  ...rest
}) {
  const [active, setActive] = useState(false);

  return (
    <div {...rest}>
      <SidebarSubtitle
        width={width}
        color={color}
        onItemClicked={() => {
          setActive(!active);
        }}
        iconName={active ? "ChevronDownIcon" : "ChevronRightIcon"}
        content={title}
        rightIcon={rightIcon}
      />
      <div className="pl-4">
        {items?.map((item, key) => (
          <MenuItem
            key={key}
            width={width}
            color={color}
            iconName={item.icon}
            content={item.content}
            show={active}
            count={item.count}
          />
        ))}
      </div>
    </div>
  );
}
