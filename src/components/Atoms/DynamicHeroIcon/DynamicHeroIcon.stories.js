import DynamicHeroIcon from "./DynamicHeroIcon";

export default {
  title: 'Components/Atoms/DynamicHeroIcon',
  component: DynamicHeroIcon,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "tetriary"],
    },
  }
}

const Template = args => <DynamicHeroIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: "PlusIcon",
  size: 10,
  color: "primary"
};

export const UpIcon = Template.bind({});
UpIcon.args = {
  iconName: "ChevronUpIcon",
  size: 10,
  color: "primary"
};

export const DownIcon = Template.bind({});
DownIcon.args = {
  iconName: "ChevronDownIcon",
  size: 10,
  color: "primary"
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  iconName: "ChevronLeftIcon",
  size: 10,
  color: "primary"
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  iconName: "ChevronRightIcon",
  size: 10,
  color: "primary"
};

