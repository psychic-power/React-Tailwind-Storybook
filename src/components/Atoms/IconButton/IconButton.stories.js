import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, PlusIcon } from "../../../icons/icon";
import IconButton from "./IconButton";

export default {
  title: 'Components/Atoms/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["lg", "md", "sm"],
    },
  },
}

const Template = args => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <PlusIcon />,
  size: "lg"
};

export const UpIcon = Template.bind({});
UpIcon.args = {
  icon: <ChevronUpIcon />
};

export const DownIcon = Template.bind({});
DownIcon.args = {
  icon: <ChevronDownIcon />
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  icon: <ChevronLeftIcon />
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  icon: <ChevronRightIcon />
};

