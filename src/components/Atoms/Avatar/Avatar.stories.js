import Avatar from "./Avatar";

export default {
  title: "Components/Atoms/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["lg", "md", "sm"],
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: "JD",
  image:
    "https://s3-alpha-sig.figma.com/img/4534/4b8a/035f6e2698b24eeb0154235d124c7ea4?Expires=1676851200&Signature=mkR4KnIfmat9PGVkzRjjtypkV~BUlkkfGRdDtN0aKToUBybH1nmpL130MlzU-Q~KRpMcUFR0~~Cu6F-6PLsZML0-a1xeqw0suaqTvUSjKTVU-lEVZcxqMPp67vR84JpcM-k74DQeHgwZAEpUDRNfSn1JZFeo15oaZFeCyX-WrXsvc7DPMqstjxKJi29nw56DEc6GzRt0jjox62lXJ9AC7GB1u9nn8CUDSPCxlfedz3-jscybeVkM1LIPeGL3Wpnro9zhNBHC04oMcM4q7VueANzoMPl39YkgRbWKOHNfda~oYWTX88eDZvq0Ag5ndHABl9JLZqFxTUsQEq0IJc4Pbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  size: "lg",
};

export const NameAvatar = Template.bind({});
NameAvatar.args = {
  username: "JD",
  image: "",
};

export const AnonymousAvatar = Template.bind({});
AnonymousAvatar.args = {
  username: "",
  image: "",
};
