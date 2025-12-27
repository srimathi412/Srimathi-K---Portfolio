import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Languages' | 'Tools';
}

export interface Achievement {
  title: string;
  value: string;
  icon?: LucideIcon;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}