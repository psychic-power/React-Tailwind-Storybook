import { InboxIcon, UserIcon } from "../../../icons/icon";
import MenuItem from "./MenuItem";

export default {
  title: 'Components/Atoms/MenuItem',
  component: MenuItem,
}

const Template = args => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  count:"0",
  content: "Label",
  icon: <InboxIcon />,
  width: "w-40",
  show: true
};

export const ItemWithCount = Template.bind({});
ItemWithCount.args = {
  count:"1",
  content: "Label",
  icon: <UserIcon />,
  width: "w-40",
  show: true
};


