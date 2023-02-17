import { LightningBoltIcon } from "../../../icons/icon";
import Button from "./Button";

export default {
  title: 'Components/Atoms/Button',
  component: Button
}

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Label",
  icon: <LightningBoltIcon />,
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  children: "Label",
};

