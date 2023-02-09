import {AppButton_2} from "./AppButton";

export default {
  title: 'Components/UI-Base Elements/AppButton',
  component: AppButton_2,
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
  }
}

const Template = args => <AppButton_2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  type: "primary",
  size: "sm",
  disabled: true
}

