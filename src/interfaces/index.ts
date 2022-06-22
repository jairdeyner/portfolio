import * as icons from "../assets/icons";

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
