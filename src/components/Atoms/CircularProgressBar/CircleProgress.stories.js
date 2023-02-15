import CircleProgress from "./CircleProgress";

export default {
  title: "Components/Atoms/CircleProgressBar",
  component: CircleProgress,
};

const Template = (args) => <CircleProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentage: 66,
};

export const Zero = Template.bind({});
Zero.args = {
  percentage: 0,
};

export const Low = Template.bind({});
Low.args = {
  percentage: 25,
};

export const Medium = Template.bind({});
Medium.args = {
  percentage: 50,
};

export const High = Template.bind({});
High.args = {
  percentage: 75,
};

export const Full = Template.bind({});
Full.args = {
  percentage: 100,
};
