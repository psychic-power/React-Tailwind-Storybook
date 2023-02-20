import StatItem from "./StatItem";
import {JiraEpicIcon} from "../../../icons/icon"

export default {
  title:"Components/Atoms/StatItem",
  component: StatItem,
}

const Template = (args) => <StatItem {...args} />

export const Default = Template.bind({});
Default.args = {
  itemName: "Item",
  icon: <JiraEpicIcon />,
  percent: 100 
}