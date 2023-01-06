import {
  ContactInformation,
  Project,
  Skill,
  SocialNetwork,
} from "../interfaces";

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

const skills: Array<Skill> = [
  {
    id: 1,
    name: "HTML 5",
    img: "skillHtml",
  },
  {
    id: 2,
    name: "CSS 3",
    img: "skillCss",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "skillJs",
  },
  {
    id: 4,
    name: "React JS",
    img: "skillReact",
  },
  {
    id: 11,
    name: "Angular",
    img: "skillAngular",
  },
  {
    id: 12,
    name: "Node JS",
    img: "skillNodejs",
  },
  {
    id: 5,
    name: "Java",
    img: "skillJava",
  },
  {
    id: 6,
    name: "MySQL",
    img: "skillMysql",
  },
  {
    id: 7,
    name: "Firebase",
    img: "skillFirebase",
  },
  {
    id: 8,
    name: "Git",
    img: "skillGit",
  },
  {
    id: 9,
    name: "GitHub",
    img: "skillGithub",
  },
  {
    id: 10,
    name: "Figma",
    img: "skillFigma",
  },
];

const projects: Array<Project> = [
  {
    id: 1,
    img: "portfolioScreen",
    name: "Portafolio",
    repository: "https://github.com/jairdeyner/portfolio",
  },
  {
    id: 2,
    homepage: "https://calvic.vercel.app",
    img: "calvicScreen",
    name: "CALVIC",
    repository: "https://github.com/Jair1996/calvic-app",
  },
  {
    id: 3,
    homepage: "https://gifexpert.vercel.app",
    img: "gifexpertScreen",
    name: "Gif Expert",
    repository: "https://github.com/jairdeyner/gif-expert",
  },
];

export { contactInformation, socialNetworks, skills, projects };
