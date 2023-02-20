import { AcademicCapIcon } from "../../../icons/icon";
import TabItem from "./TabItem";

export default {
  title: 'Components/Atoms/Tab/TabItem',
  component: TabItem,
}

const Template = args => <TabItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    name: "Tab item",
    icon: <AcademicCapIcon />
  },
  active:false
};



