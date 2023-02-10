import AppLogo from "./AppLogo";

export default {
  title: 'Components/UI-Base Elements/AppLogo',
  component: AppLogo,
  argTypes: {
    // type: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['H1', 'H2', 'H3', 'PSemibold', 'PMedium', 'PRegular', 'Caption', "Caption2" ],
    // },
    // font: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['Inter', 'Default', 'Bodoni', 'Garamond', 'Helvetica', 'Verdana', 'Poppins'],
    // },
  }
}

const Template = args => <AppLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: true,
  colorClassName: "text-primary-600",
  bgClassName: "bg-gray-50",
};

