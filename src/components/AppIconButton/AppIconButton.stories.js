import AppIconButton from "./AppIconButton";

export default {
  title: 'Components/UI-Base Elements/AppIconButton',
  component: AppIconButton,
}

const Template = args => <AppIconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: "PlusIcon",
  iconClassName: "text-gray-900 dark:text-gray-50",
  bgClassName: "bg-gray-100 dark:bg-gray-800",
};

