import AppAvatar from "./AppAvatar";

export default {
  title: 'Components/UI-Base Elements/AppAvatar',
  component: AppAvatar,
}

const Template = args => <AppAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: "",
  image: "",
  size: 1,
};

