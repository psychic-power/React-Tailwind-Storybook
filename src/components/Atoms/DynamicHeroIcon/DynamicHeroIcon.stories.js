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
  name: "PlusIcon",
  size: 10,
  color: "primary"
};

export const UpIcon = Template.bind({});
UpIcon.args = {
  name: "ChevronUpIcon",
  size: 10,
  color: "primary"
};

export const DownIcon = Template.bind({});
DownIcon.args = {
  name: "ChevronDownIcon",
  size: 10,
  color: "primary"
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  name: "ChevronLeftIcon",
  size: 10,
  color: "primary"
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  name: "ChevronRightIcon",
  size: 10,
  color: "primary"
};

