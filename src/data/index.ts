import { ContactInformation, SocialNetwork } from "../interfaces";

const contactInformation: Array<ContactInformation> = [
  {
    id: 1,
    icon: "iconMail",
    title: "email",
    text: "jairdeyner730791@gmail.com",
    htmlElement: {
      tag: "a",
      href: "mailto:jairdeyner730791@gmail.com",
    },
  },
  {
    id: 2,
    icon: "iconPhone",
    title: "teléfono",
    text: "+51 949726263",
    htmlElement: {
      tag: "a",
      href: "tel:+51951167340",
    },
  },
  {
    id: 3,
    icon: "iconLocation",
    title: "ubicación",
    text: "Ate, Lima, Perú",
    htmlElement: {
      tag: "p",
    },
  },
];

const socialNetworks: Array<SocialNetwork> = [
  {
    id: 1,
    icon: "iconTwitter",
    href: "https://twitter.com/jairtellodev",
  },
  {
    id: 2,
    icon: "iconLinkedin",
    href: "https://www.linkedin.com/in/jairdeyner",
  },
  {
    id: 3,
    icon: "iconGithub",
    href: "https://github.com/jairdeyner",
  },
];

export { contactInformation, socialNetworks };
