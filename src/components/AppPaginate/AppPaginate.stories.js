import AppPaginate from "./AppPaginate";

export default {
  title: 'Components/UI-Base Elements/AppPaginate',
  component: AppPaginate,
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

const Template = args => <AppPaginate {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  type: "primary",
  size: "sm",
  font: "Default",
  disabled: true
}

