import * as icons from "../assets/icons";
import * as skills from "../assets/images/skills";

export interface AnchorElement {
  tag: "a";
  href: string;
}

interface ParagraphElement {
  tag: "p";
}

export type Icons = keyof typeof icons;

export interface ContactInformation {
  id: number;
  icon: Icons;
  title: string;
  text: string;
  htmlElement: AnchorElement | ParagraphElement;
}

export interface SocialNetwork {
  id: number;
  icon: Icons;
  href: string;
}

export type SkillNames = keyof typeof skills;

export interface Skill {
  id: number;
  name: string;
  img: SkillNames;
}
