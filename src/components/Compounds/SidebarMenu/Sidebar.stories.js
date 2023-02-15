import Sidebar from "./Sidebar";

export default {
  title: "Components/Compounds/Sidebar",
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};
