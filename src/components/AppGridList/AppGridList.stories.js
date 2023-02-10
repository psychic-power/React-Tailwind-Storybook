import AppGridList from "./AppGridList";

export default {
  title: 'Components/Test Elements/AppGridList',
  component: AppGridList,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['type_1', 'type_2'],
    },
  }
}

const Template = args => <AppGridList {...args} />;

export const Default = Template.bind({});
Default.args = {
  userData: [
    {
      avatar: "https://s3-alpha-sig.figma.com/img/b63d/cc7d/01d74948f9495b9bc281d8a43636ac2b?Expires=1676851200&Signature=qW75Io9V9mDRkYphK6-jHnp-81VrvTuB4sCFrW7bXMwtcVyo-wwNsWq4~YerZEyYOUcT-C547D4biIOS0MadzyWik~gOqn~glXJe~53e-ZOLO7Wp0NSLrQm9elNpWuXDgI7AoAtPmk75GgV7W-vtB5zsLkmTGWAA0HgbhHOIIFJZaeOeJYSUgsKOOaiC4StLNt~HGH3nlXY8gLFtnBkKIAc5iqRIksY7QfRBNu6B56glBjLlUuGDE0Xxp1K0LzjMnwiqjMBCWR0ir308BMD-234foty6WnDAXAZBNVkFpyE~EuUafVBtuYTg8obCnWE1OGJBAS7ZjCqcFxEwVLtgtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      username: "Jane Cooper",
      description: "Regional Paradigm Technician",
      role: "Admin",
    },
    {
      avatar: "https://s3-alpha-sig.figma.com/img/27f7/a598/c5b1ddc4527708872025d99ec9afb191?Expires=1676851200&Signature=bdVO07AUTywrYuN7i2hdF~0zEVLR18Ovb~ORDKjaosCQ2mQ2ttzzkv7HCVb4G27blp2Lf0bG82O7-vBj2ozTu7uimvTNYkslDr1e4HkM6dnoRZMVs1Ok2IXO9hO3E2fM1h6Z1p06lWSzG1RnHhAHeJou8hyWWKLndtOKdXYrUgjD-d~mUMyPp8wyBfxIqAXqqA087-Z8E7LmlXFerALW8Bfd-D8qE4mJj2JHE2EolAhej0O1LOphhcyhRfQVzrUDPYYOtoMnsI59re1CqggXvhJcgyL21HI703mpx34UuW-tVgPJWAH6YR5N0r~L9QmwGH5xd9EPBcjbR4k6cJitxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      username: "Cody Fisher",
      description: "Product Directives Officer",
      role: "User",
    },
    {
      avatar: "https://s3-alpha-sig.figma.com/img/da9c/baa9/ae842ac86ffe2c82b851bb8fcaf51fea?Expires=1676851200&Signature=MuNNx2hYCiuN9SUBNAY4VqmJ7hGt3u2OJnR-jET2F5P1YxBLYmlSC3gW7UVAYWp4oQ7iRI04R9cgUnIYc27prdLi2QLNGdFWLqsKpepjhUUY4vfpYKC-AYII7-5JtWP024p35M1~nEC4J5TgsqLPatI1IXvUDo3CNP2KmDtjtAtNPX1YaIZVOrQa-5AuDPX5lHyRRDHwajcqfmFOZ1CDVbo1k4PIByj9Z4l2cEIK29BQW7~uSeft3-4-KqAdKDjrs0FcYiENm6ryy1qbfRGZy2aVCIDiEzv~jQ-ZmmYleDPgdyYB-M1r-5IHU7rSqHdBR7buDlaOlQNezxIX4pWL0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      username: "Esther Howard",
      description: "Forward Response Developer",
      role: "Developer",
    },
    {
      avatar: "https://s3-alpha-sig.figma.com/img/14c4/56d8/4fd003c3652ed136f6d07031744806cb?Expires=1676851200&Signature=EUvn49xQIkO22wy7Tn9kMz-Yb~RaTl1HfysxBapWytIhP9J6hodlGscYfEGnlR~OPMZLp8YEFKUjRgp9qAORzYBnc5Li6BMOQfy3qsZfMMOp5RIBOVeHN44Ax4n7bltrgfLa2dIjz~n4G1ZCThGVj4QrfHRfutBsLZqSG5P-EJtoT0pei3Lfam8yXfqd~UDCLLgwUDrfo85ewQ0dTxso8dSs3toNO2tQsHYe4DPjtTufw8BcmiUfMksU92Kg0yLiX0BOb4sJjZy9MUpIW6bfShGjwIJLLYz8acuTkInIpDkriPZQAXyuwNG6jv3LsVeTNp8T1kz4YN925M5s6PxGNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      username: "Jenny Wilson",
      description: "Central Security Manager",
      role: "Manager",
    },
    {
      avatar: "https://s3-alpha-sig.figma.com/img/36da/a4a9/a5e018f2735dff9c42185338550b4a5f?Expires=1676851200&Signature=JAlwHCkH0YvZr8OMfhrPSMxl~EFI~AFvrOSEfG97YaMdJnhyVlcywH~Pu3zQzXxN93CFttVd8JVJ04~X481NvkJFh23cVAydABGjZ4hJgIi9ZmfkqFatLPgUzXkbrR~7nroNROPGrkXeSFwKygj1IfwnAEbt-b5A4c8XxaplMq7lRW6UFZzu57baC0TtmOzbszIGjSLUKXKW9jlQNvWdf6fcfOtlL~SUccwjrjFij0vSbb5uGRaOFDENe8zn-YEZY4zXk8cfEjh58gwRFdFs~k7tOyDUrQ8eXD93xC6jl7ygHC86NDcXOQqZ8LlqvlkFx4bmFRXUb6lfXm2Msy~yKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      username: "Gustavo Fialho",
      description: "Lead Implementation Liaison",
      role: "Admin",
    },
    {
      avatar: "https://s3-alpha-sig.figma.com/img/06fc/3a94/a01fe6acc07bd7cd1fda946ae05ef230?Expires=1676851200&Signature=WP~hyEGKoDygPsWuzpwHiVfPVHPXZa7uNs4IRCsR7dyJHI~ZAnVeeCsRHKd6d26z~UjgBze621vCZVqLIa0u2PxAl-aaSqNGKsHWyxp5EThtxHUk9KQoCg9SL326fxADE9ascyuhnJlv6sYQFnJjvStkJNbNOwWuuj9auBExnVDDeLG7ThYcXOAjZPRJ-8AfNekE19YNKi~WB2FJVNMDT~wEwMXQ0EV2XxbZA6Tc4kfvN1iTXfsi1DLD2Ky-e79EvmwqlYUhX8lM2b13TyBI8B6VYzXQJhaFRQt46Qq~L3oxhGnlW5cmr8-seZTPDEwdqa-VEYJfHJMKvVRmu7VWMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      username: "Cameron Williamson",
      description: "Internal Application Engineer",
      role: "Admin",
    },
  ],
  type: "type_1",
}

