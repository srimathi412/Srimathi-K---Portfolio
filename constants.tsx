import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Trophy, 
  Terminal, 
  Cpu, 
  Globe 
} from "lucide-react";
import { Achievement, Project, Skill, SocialLink } from "./types";

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/srimathi412", icon: Github },
  { name: "LeetCode", url: "https://leetcode.com/u/Srimathi_K/", icon: Code2 },
  { name: "CodeChef", url: "https://www.codechef.com/users/srimathi_4125", icon: Terminal },
  { name: "Codolio", url: "https://codolio.com/profile/Srimathi_4125", icon: Globe },
  { name: "Codeforces", url: "https://codeforces.com/profile/Srimathi_k", icon: Cpu },
  { name: "Email", url: "mailto:kit27.cse57@gmail.com", icon: Mail },
];

export const SKILLS: Skill[] = [
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Languages" },
  { name: "React.js", category: "Frontend" },
  { name: "Python", category: "Languages" },
  { name: "C / C++", category: "Languages" },
  { name: "MySQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "Git & GitHub", category: "Tools" },
];

export const PROJECTS: Project[] = [
  {
    title: "NutriDiet",
    description: "Personalized diet recommendation system using machine learning. Analyzes user health data and suggests optimized meal plans.",
    tags: ["Machine Learning", "Python", "Web App"],
    link: "https://github.com/srimathi412/NutriDiet",
    github: "https://github.com/srimathi412/NutriDiet"
  },
  {
    title: "Study Master",
    description: "Smart study planner that helps students manage time and complete their syllabus efficiently.",
    tags: ["React", "Productivity", "Education"],
    link: "https://github.com/srimathi412/study-master",
    github: "https://github.com/srimathi412/study-master"
  },
  {
    title: "Personal Portfolio",
    description: "Responsive personal portfolio website built using modern UI/UX principles and animations.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/srimathi412/portfolio_1",
    github: "https://github.com/srimathi412/portfolio_1"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "CodeChef", value: "850+ Solved (2★)", icon: Terminal },
  { title: "LeetCode", value: "200+ Problems", icon: Code2 },
  { title: "Total Solved", value: "1000+ Problems", icon: Trophy },
  { title: "Hackathon", value: "36-Hour Finalist", icon: Cpu },
  { title: "Experience", value: "Full-Stack Intern", icon: Globe },
];