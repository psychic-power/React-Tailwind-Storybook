import Typography from "./Typography";

export default {
  title: "Components/Atoms/Typography",
  component: Typography,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: [
        "h1",
        "h2",
        "h3",
        "p-semibold",
        "p-medium",
        "p-regular",
        "caption",
        "caption2",
      ],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "tetriary"],
    },
  },
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "p-regular",
  color: "primary",
};

export const h1 = Template.bind({});
h1.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "h1",
  color: "primary",
};

export const h2 = Template.bind({});
h2.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "h2",
  color: "primary",
};

export const h3 = Template.bind({});
h3.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "h3",
  color: "primary",
};

export const pSemibold = Template.bind({});
pSemibold.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "p-semibold",
  color: "primary",
};

export const pMedium = Template.bind({});
pMedium.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "p-medium",
  color: "primary",
};

export const pRegular = Template.bind({});
pRegular.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "p-regular",
  color: "primary",
};

export const caption = Template.bind({});
caption.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "caption",
  color: "primary",
};

export const caption2 = Template.bind({});
caption2.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "caption2",
  color: "primary",
};


