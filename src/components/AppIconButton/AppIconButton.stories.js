import AppIconButton from "./AppIconButton";

export default {
  title: 'Components/UI-Base Elements/AppIconButton',
  component: AppIconButton,
}

const Template = args => <AppIconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: "PlusIcon",
  iconClassName: "",
  bgClassName: "",
};

