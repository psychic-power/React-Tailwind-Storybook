import Divider from "./Divider";

export default {
  title: 'Components/Atoms/Divider',
  component: Divider
}

const Template = args => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  vertical: false
};


