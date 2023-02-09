import AppButton from "./AppButton";

export default {
  title: 'Components/UI-Base Elements/AppButton',
  component: AppButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['basic', 'primary', 'secondary', 'danger' ],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    font: {
      control: {
        type: 'select',
      },
      options: ['Bodoni', 'Garamond', 'Helvetica', 'Verdana', 'Poppins', 'Default'],
    },
  }
}

const Template = args => <AppButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  type: "primary",
  size: "md",
  font: "Default",
  disabled: false
}

