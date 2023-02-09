import AppDropdown from "./AppDropdown";

export default {
  title: "Components/UI-Base Elements/AppDropdown",
  component: AppDropdown,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["basic", "primary", "secondary", "danger"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    font: {
      control: {
        type: "select",
      },
      options: [
        "Bodoni",
        "Garamond",
        "Helvetica",
        "Verdana",
        "Poppins",
        "Default",
      ],
    },
  },
};

const Template = (args) => <AppDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Option",
  options: ["Option 1", "Option 2", "Option 3"],
  type: ["basic"],
};
