import AppMenuItem from "./AppMenuItem";

export default {
  title: 'Components/UI-Base Elements/AppMenuItem',
  component: AppMenuItem,
  argTypes:{
    type: {
      control: {
        type: 'select',
      },
      options: ['H1', 'H2', 'H3', 'PSemibold', 'PMedium', 'PRegular', 'Caption', "Caption2" ],
    },
  }
}

const Template = args => <AppMenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  child: "Test",
  colorClassName: "",
  bgClassName: "",
  icon: "UserIcon",
  size: 5
};

