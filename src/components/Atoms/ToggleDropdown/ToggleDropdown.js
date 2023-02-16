import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import SidebarSubtitle from "../SidebarSubtitle/SidebarSubtitle";

/**
 * This component represents toggling dropdown.
 *
 * @param {string} title - Title of dropdown
 * @param {string} rightIcon - Icon of toggle title located on the right side
 * @param {string} width - Width class based on Tailwind CSS
 * @param {string} color - Background color of dropdown button and item menus.
 * @param {array[object]} items - Toggle item menu data. e.g  items: [{icon: "ViewColumnsIcon", content:"Active board", count:0}, {icon: "ArrowsRightLeftIcon", content:"Triage", count:1}, {icon: "ClockIcon", content:"Retrospective", count:0}, {icon: "HandRaisedIcon", content:"Agreements", count:0}],
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

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
