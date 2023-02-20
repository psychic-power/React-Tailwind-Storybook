import Tab from "./Tab";
import AcademicCap from "../../../icons/icon"

export default {
  title: "Components/Atoms/Tab",
  component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabData: [
    {name: "Tab Item 1", icon: <AcademicCap />},
    // {name: "Tab Item 2", icon: <AcademicCap />},
    // {name: "Tab Item 3", icon: <AcademicCap />},
    // {name: "Tab Item 4", icon: <AcademicCap />}
  ],
};
