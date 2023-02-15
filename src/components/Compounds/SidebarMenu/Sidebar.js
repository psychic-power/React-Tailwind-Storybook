import Divider from "../../Atoms/Divider/Divider";
import Logo from "../../Atoms/Logo/Logo";
import MenuItem from "../../Atoms/MenuItem/MenuItem";
import IconButton from "../../Atoms/IconButton/IconButton";
import ToggleDropdown from "../../Atoms/ToggleDropdown/ToggleDropdown";

export default function Sidebar() {
  return (
    <div
      className="flex flex-col w-[216px] px-[18px] bg-surface-alt-light dark:bg-surface-alt-dark"
      id="SidebarMenu"
    >
      <div className="flex justify-between py-[18px]">
        <Logo abbr={false} />
        <IconButton iconName="Cog8ToothIcon" color="alt" size={4} />
      </div>
      <div className="w-full">
        <MenuItem
          iconName="MagnifyingGlassIcon"
          count={0}
          width="w-[188px]"
          show
          content="Search"
          color="alt"
        />
        <MenuItem
          iconName="InboxIcon"
          width="w-[188px]"
          count={1}
          show
          content="Inbox"
          color="alt"
        />
        <MenuItem
          iconName="InboxIcon"
          width="w-[188px]"
          count={0}
          show
          content="Inbox"
          color="alt"
        />
        <MenuItem
          iconName="DocumentDuplicateIcon"
          width="w-[188px]"
          count={0}
          show
          content="My dashboards"
          color="alt"
        />
      </div>
      <Divider vertical={false} />
      <ToggleDropdown
        className="mb-2"
        title="R&D team"
        color="alt"
        items={[
          { icon: "ViewColumnsIcon", content: "Active board", count: 0 },
          { icon: "ArrowsRightLeft", content: "Triage", count: 1 },
          { icon: "ClockIcon", content: "Retrospective", count: 0 },
          { icon: "HandRaised", content: "Agreements", count: 0 },
        ]}
      />
      <ToggleDropdown
        className="mb-2"
        title="Product Development"
        color="alt"
        items={[
          { icon: "ViewColumnsIcon", content: "Active board", count: 0 },
          { icon: "ArrowsRightLeft", content: "Triage", count: 1 },
          { icon: "ClockIcon", content: "Retrospective", count: 0 },
          { icon: "HandRaised", content: "Agreements", count: 0 },
        ]}
      />
      <ToggleDropdown
        className="mb-2"
        title="Design Validation"
        color="alt"
        items={[
          { icon: "ViewColumnsIcon", content: "Active board", count: 0 },
          { icon: "ArrowsRightLeft", content: "Triage", count: 1 },
          { icon: "ClockIcon", content: "Retrospective", count: 0 },
          { icon: "HandRaised", content: "Agreements", count: 0 },
        ]}
      />
      <MenuItem
        iconName="PlusIcon"
        color="alt"
        show
        content="Select my teams"
      />
    </div>
  );
}
