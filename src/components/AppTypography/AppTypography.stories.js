import AppTypography from "./AppTypography";

export default {
  title: 'Components/UI-Base Elements/AppTypography',
  component: AppTypography,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['H1', 'H2', 'H3', 'PSemibold', 'PMedium', 'PRegular', 'Caption', "Caption2" ],
    },
    font: {
      control: {
        type: 'select',
      },
      options: ['Inter', 'Default', 'Bodoni', 'Garamond', 'Helvetica', 'Verdana', 'Poppins'],
    },
  }
}

const Template = args => <AppTypography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "PRegular",
  font: "Inter",
  colorClassName: "text-black dark:text-white"
};

export const H1Red = Template.bind({});
H1Red.args = {
  children: "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "H1",
  font: "Inter",
  colorClassName: "text-red-600"
};

export const H2Blue = Template.bind({});
H2Blue.args = {
  children: "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "H2",
  font: "Inter",
  colorClassName: "text-blue-600"
};

export const PRegularSocialFaceBook = Template.bind({});
PRegularSocialFaceBook.args = {
  children: "Felis sit ac pretium viverra in. Ut purus mattis tempor nullam lectus ultrices mi. Non vulputate nisl et quam a.",
  type: "PRegular",
  font: "Inter",
  colorClassName: "text-social-facebook"
};

