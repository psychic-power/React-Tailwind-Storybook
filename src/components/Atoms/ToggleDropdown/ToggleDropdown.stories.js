import ToggleDropdown from "./ToggleDropdown";

export default {
  title: 'Components/Atoms/ToggleDropdown',
  component: ToggleDropdown
}

const Template = args => <ToggleDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Product Development",
  items: [
    {icon: "ViewColumnsIcon", content:"Active board", count:0},
    {icon: "ArrowsRightLeft", content:"Triage", count:1},
    {icon: "ClockIcon", content:"Retrospective", count:0},
    {icon: "HandRaised", content:"Agreements", count:0},
  ],
  width: "w-60" 
};


