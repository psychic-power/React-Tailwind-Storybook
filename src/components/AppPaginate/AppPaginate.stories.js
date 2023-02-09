import AppPaginate from "./AppPaginate";

export default {
  title: 'Components/UI-Base Elements/AppPaginate',
  component: AppPaginate,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg' ],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['basic', 'primary', 'secondary' ],
    },
  }
}

const Template = args => <AppPaginate {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 10,
  disabled: false,
  size: "sm",
  color: "basic"
}

