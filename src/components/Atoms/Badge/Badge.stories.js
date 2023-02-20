import { ClockIcon } from "../../../icons/icon";
import Badge from "./Badge";

export default {
  title: 'Components/Atoms/Badge',
  component: Badge,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["surface", "warning", "success"],
    },
  },
}

const Template = args => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Badge",
  type: "surface",
};

export const IconBadge = Template.bind({});
IconBadge.args = {
  children: "Badge",
  type: "warning",
  icon: <ClockIcon />
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: 1,
//   textColor: "secondary",
//   bgColor:"select",
// };

// export const Tetriary = Template.bind({});
// Tetriary.args = {
//   children: 1,
//   textColor: "tetriary",
//   bgColor:"select",
// };

