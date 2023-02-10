import AppLogo from "./AppLogo";

export default {
  title: 'Components/UI-Base Elements/AppLogo',
  component: AppLogo,
}

const Template = args => <AppLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: true,
  colorClassName: "text-primary-600",
  bgClassName: "bg-gray-50",
};

