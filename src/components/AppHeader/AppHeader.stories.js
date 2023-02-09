import AppHeader from "./AppHeader";

export default {
  title: "Components/UI-Base Elements/AppHeader",
  component: AppHeader,
  argTypes: {
    // type: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['basic', 'primary', 'secondary', 'danger' ],
    // },
  },
};

const Template = (args) => <AppHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  datas: [
    {
      title: "Solutions",
      value: [
        {
          name: "Analytics",
          description:
            "Get a better understanding of where your traffic is coming from.",
          href: "#",
          icon: "ChartBarIcon",
        },
        {
          name: "Engagement",
          description:
            "Speak directly to your customers in a more meaningful way.",
          href: "#",
          icon: "CursorArrowRaysIcon",
        },
        {
          name: "Security",
          description: "Your customers' data will be safe and secure.",
          href: "#",
          icon: "ShieldCheckIcon",
        },
        {
          name: "Integrations",
          description:
            "Connect with third-party tools that you're already using.",
          href: "#",
          icon: "Squares2X2Icon",
        },
        {
          name: "Automations",
          description:
            "Build strategic funnels that will drive your customers to convert",
          href: "#",
          icon: "ArrowPathIcon",
        },
      ],
    },
    {
      title: "Pricing",
      value: [],
    },
    {
      title: "Doc",
      value: [],
    },
    {
      title: "More",
      value: [
        {
          name: "Help Center",
          description:
            "Get all of your questions answered in our forums or contact support.",
          href: "#",
          icon: "LifebuoyIcon",
        },
        {
          name: "Guides",
          description:
            "Learn how to maximize our platform to get the most out of it.",
          href: "#",
          icon: "BookmarkSquareIcon",
        },
        {
          name: "Events",
          description:
            "See what meet-ups and other events we might be planning near you.",
          href: "#",
          icon: "CalendarIcon",
        },
        {
          name: "Security",
          description: "Understand how we take your privacy seriously.",
          href: "#",
          icon: "ShieldCheckIcon",
        },
      ],
    },
  ],
  logo: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
  signInfo: false
};
