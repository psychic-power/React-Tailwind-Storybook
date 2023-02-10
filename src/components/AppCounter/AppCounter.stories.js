import AppCounter from "./AppCounter";

export default {
  title: 'Components/UI-Base Elements/AppCounter',
  component: AppCounter,
}

const Template = args => <AppCounter {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Test",
  textClassName: "text-gray-900 dark:text-gray-50",
  bgClassName: "bg-gray-100 dark:bg-gray-800",
};

