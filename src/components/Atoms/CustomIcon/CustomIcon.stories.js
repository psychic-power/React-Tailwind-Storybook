import CustomIcon from "./CustomIcon";

export default {
  title: "Components/Atoms/CustomIcon",
  component: CustomIcon,
  argTypes: {
    icon: {
      control: {
        type: "select",
      },
      options: [
        "highest",
        "high",
        "medium",
        "low",
        "lowest",
        "story",
        "bug",
        "task",
        "initiative",
        "custom",
        "epic",
        "subtask",
        "git-pull-request",
        "git-pull-request-closed",
        "git-pull-request-draft",
        "git-merge",
        "repo-forked",
        "git-merge-queue",
        "git-compare",
        "git-commit",
        "git-branch",
      ],
    },
  },
};

const Template = (args) => <CustomIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "story",
  size: 25,
};
