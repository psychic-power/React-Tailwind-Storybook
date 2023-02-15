import {
  Caption,
  Caption2,
  H1,
  H2,
  H3,
  PMedium,
  PRegular,
  PSemibold,
} from "./Typography";

export default {
  title: "Components/Atoms/Typography",
  component: {Caption, Caption2, H1, H2, H3, PMedium, PRegular, PSemibold},
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "tetriary"],
    },
  },
};

const Heading1 = (args) => <H1 {...args} />;

export const TypoH1 = Heading1.bind({});
TypoH1.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  color: "primary",
};

const Heading2 = (args) => <H2 {...args} />;

export const TypoH2 = Heading2.bind({});
TypoH2.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  color: "primary",
};

const Heading3 = (args) => <H3 {...args} />;

export const TypoH3 = Heading3.bind({});
TypoH3.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  color: "primary",
};

const Semibold = (args) => <PSemibold {...args} />;

export const SemiboldP = Semibold.bind({});
SemiboldP.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  color: "primary",
};

const Medium = (args) => <PMedium {...args} />;

export const MediumP = Medium.bind({});
MediumP.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  color: "primary",
};

const Regular = (args) => <PRegular {...args} />;

export const RegularP = Regular.bind({});
RegularP.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  color: "primary",
};

const PCaption = (args) => <Caption {...args} />;

export const TypoCaption = PCaption.bind({});
TypoCaption.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  color: "primary",
};

const PCaption2 = (args) => <Caption2 {...args} />;

export const TypoCaption2 = PCaption2.bind({});
TypoCaption2.args = {
  children:
    "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  color: "primary",
};
