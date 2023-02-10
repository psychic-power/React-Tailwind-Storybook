import AppSidebarItem from "./AppSidebarItem";

export default {
  title: 'Components/UI-Compound Elements/AppSidebarItem',
  component: AppSidebarItem,
  argTypes:{
    type: {
      control: {
        type: 'select',
      },
      options: ['H1', 'H2', 'H3', 'PSemibold', 'PMedium', 'PRegular', 'Caption', "Caption2" ],
    },
  }
}

const Template = args => <AppSidebarItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  child: "Test",
  colorClassName: "",
  bgClassName: "",
  icon: "UserIcon",
  size: 5
};

