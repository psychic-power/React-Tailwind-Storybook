import Logo from "./Logo";

export default {
  title: 'Components/Atoms/Logo',
  component: Logo,
}

const Template = args => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  abbreviation: true,
};

