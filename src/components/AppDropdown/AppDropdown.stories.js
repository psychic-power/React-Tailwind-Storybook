import AppDropdown from "./AppDropdown";

export default {
  title: "Components/Test Elements/AppDropdown",
  component: AppDropdown,
  argTypes: {
    // type: {
    //   control: {
    //     type: "select",
    //   },
    //   options: ["type_1", "type_2", "type_3", "type_4"],
    // },
  },
};

const Template = (args) => <AppDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Option",
  options: [
    {value: "Option 1",},
    {value: "Option 2",},
    {value: "Option 3",}
  ]
};
