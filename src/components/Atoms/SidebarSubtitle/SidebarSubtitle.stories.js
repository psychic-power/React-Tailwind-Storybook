import { ChevronDownIcon } from "../../../icons/icon";
import SidebarSubtitle from "./SidebarSubtitle";

export default {
  title: 'Components/Atoms/SidebarSubtitle',
  component: SidebarSubtitle,
}

const Template = args => <SidebarSubtitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Label",
  icon: <ChevronDownIcon />,
  width: "",
  setting:false,
};

export const ItemWithSetting = Template.bind({});
ItemWithSetting.args = {
  content: "Label",
  icon: <ChevronDownIcon />,
  width: "w-40",
  setting:true,
};


