import IconButton from "./IconButton";

export default {
  title: 'Components/Atoms/IconButton',
  component: IconButton,
}

const Template = args => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: "PlusIcon",
  size: 10,
};

export const UpIcon = Template.bind({});
UpIcon.args = {
  iconName: "ChevronUpIcon",
  size: 10,
};

export const DownIcon = Template.bind({});
DownIcon.args = {
  iconName: "ChevronDownIcon",
  size: 10,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  iconName: "ChevronLeftIcon",
  size: 10,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  iconName: "ChevronRightIcon",
  size: 10,
};

