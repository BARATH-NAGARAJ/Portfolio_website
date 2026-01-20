import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
} from "react-icons/fa6";
import { FaAngular, FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import projectImage1 from "../assets/project1.jpg";
import projectImage2 from "../assets/project2.jpg";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.jpg";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";

import { FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa";
import { SiJavascript, SiMysql, SiFigma, SiCanva} from "react-icons/si";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "BARATH N",
  greet: "Hello there! 👋🏻",
  description:
    "I am a Software Developer majoring in Computer Science and Design. My focus is on writing clean, functional code and building systems that solve actual problems. I enjoy the challenge of taking a concept and turning it into a working application.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Saree Sales Management",
   description:
    "A full-stack MERN application designed to streamline saree business operations with features for inventory tracking, sales management, and reporting.",
    image: projectImage1,
    githubLink: "https://github.com/BARATH-NAGARAJ/SAREE-SALES-MANAGEMENT",
  },
  {
    id: 2,
    name: "Personal Portfolio Website",
    description:
    "A sleek and responsive portfolio site created using React, Tailwind CSS, and Framer Motion. It highlights my skills, projects, and contact details with elegant animations and a clean, user-friendly layout that works great on any device.",
    image: projectImage2,
    githubLink: "https://github.com/BARATH-NAGARAJ/Portfolio_website",
  },
  {
    id: 3,
    name: "Monday Coffee - SQL Project",
   description:
    "A database project focused on managing a coffee shop's data using PostgreSQL. Includes customer details, orders, inventory, and analytical queries for business insights.",
    image: projectImage3,
    githubLink: "https://github.com/BARATH-NAGARAJ/MONDAY_COFFEE_SQL_PROJECT",
  },
  {
    id: 4,
    name: "Expense Tracker",
  description:
    "A full-stack MERN application for managing daily expenses and budgets with a clean, user-friendly interface for tracking transactions.",
    image: projectImage4,
    githubLink: "https://github.com/BARATH-NAGARAJ/Expense_Tracker",
  },
  {
    id: 5,
    name: "Wear It - UI/UX Design",
  description:
    "A UI/UX redesign of an online fashion store focused on clean layouts, intuitive navigation, and an engaging shopping experience, created with Figma.",
    image: projectImage5,
    githubLink: "https://github.com/BARATH-NAGARAJ/UI-UX-WEAR-IT",

  },
  {
    id: 6,
    name: "FurniAR: Interactive Furniture Visualization",
    description:
    "An AR/VR application allowing users to interact with 3D furniture models in real space, built using Unity and Vuforia to enhance interior design visualization.",
    image: projectImage6,
    githubLink: "https://github.com/BARATH-NAGARAJ/FURNITURE-AR-VR",
  },
];

export const BIO = [
  " I am currently pursuing my Bachelor of Engineering in Computer Science and Design at Kongu Engineering College, and I’m expected to graduate in 2026. My course focuses heavily on UI design, game design, and all the creative aspects that combine technology with user experience. I enjoy learning about these areas and applying what I’ve studied in practical projects.",
  
  "Alongside my studies, I have gained foundational knowledge in Java programming and have recently expanded my skill set to include Angular. I am comfortable working with core web technologies such as HTML, CSS, JavaScript, and React, and I also have experience with MySQL and MongoDB for database management.",

  "I have participated in several coding competitions, which have helped me improve my problem-solving skills and coding abilities. One of my key projects was working as part of a team to build an e-commerce website for a saree business, where I took responsibility for the frontend development. This experience gave me valuable insight into teamwork, project management, and applying my technical skills in real-world scenarios.",

  "I am passionate about growing as a developer and designer, always eager to take on new challenges and create meaningful, user-friendly digital experiences."
];

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
    website: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS",
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    icon: <FaReact className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    website: "https://react.dev"
  },
  {
    icon: <SiMysql className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "MySQL",
    website: "https://www.mysql.com"
  },
  {
    icon: <SiFigma className="text-4xl text-pink-500 lg:text-5xl" />,
    name: "Figma",
    website: "https://www.figma.com"
  },
  {
    icon: <SiCanva className="text-4xl text-indigo-500 lg:text-5xl" />,
    name: "Canva",
    website: "https://www.canva.com"
  },
  {
    icon: <FaJava className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Java",
    website: "https://www.oracle.com/java"
  },
    {
    icon: <FaAngular className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Angular",
    website: "https://angular.io"
  },
  {
    icon: <SiMongodb className="text-4xl text-green-500 lg:text-5xl" />,
    name: "MongoDB",
    website: "https://www.mongodb.com"
  },
  {
    icon: <FaPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
    website: "https://www.python.org"
  },
];

export const EXPERIENCES = [
  {
  title: "Frontend Developer",
  company: "SPS Sarees (Consultancy Project)",
  duration: "January 2025 - April 2025",
  description:
    "I worked as a frontend developer on a consultancy project for SPS Sarees, where our team built a fully functional e-commerce website. I was responsible for designing and developing the user interface, ensuring a smooth and responsive user experience. This project helped me apply my skills in real-world scenarios, work closely with teammates, and gain a deeper understanding of frontend development. It was a great learning experience, and I’m really proud of what we built together. I’m excited to take on more projects like this in the future!",
},
  {
  title: "Industry Visit Organizer",
  company: "Palakkad Industrial Visit",
  duration: "May 10, 2024",
  description:
    "I had the opportunity to organize an industry visit to Palakkad for a group of 40 to 45 students from my department. As the coordinator, I managed the planning, logistics, and coordination with the company we visited. The visit gave us a deeper understanding of real-world industrial processes, and we also got to explore the local area, which made the experience both educational and enjoyable. Organizing this event helped me develop leadership, communication, and time management skills. It was a proud moment for me, and I look forward to organizing more such valuable experiences in the future.",
},
  {
  title: "Media Team Member",
  company: "Computer Science and Design Association Club",
  duration: "August 2024 – April 2025",
  description:
    "As part of the Media Team, I contributed to designing posters, managing social media updates, and supporting the visual aspects of our club events. This role helped me improve my creative skills, work better in a team, and gain experience with digital tools and event promotion.",
}
,
];

export const EDUCATION = [
  {
    degree: "Bachelor in Engineering in Computer Science and Design",
    institution: "Kongu Engineering College, Erode",
    duration: "2022 - 2026",
    description:
      "Specialized in Computer Science and Design, with a focus on creating effective and user-friendly digital experiences. Engaged in projects combining design principles with technical development. Gained hands-on experience in building responsive and visually engaging applications. Graduating in June 2026.",
  },
  {
    degree: "Higher Secondary Education (Computer Science)",
    institution: "Infant Jesus Matriculation Higher Secondary School, Tiruppur",
    duration: "June 2021 – April 2022",
    description:
      "Studied core subjects in Computer Science including basic programming and IT concepts. Participated in school-level coding competitions and academic events. Built a strong foundation for future studies in technology.",
  },
  {
    degree: "Secondary School Education",
    institution: "Infant Jesus Matriculation Higher Secondary School, Tiruppur",
    duration: "June 2019 – April 2020",
    description:
      "Completed 10th grade with focus on science and mathematics. Developed interest in technology and design through academic projects and school activities. Graduated with strong academic performance.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/_its.__me.__barath_/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/BARATH-NAGARAJ",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/barath-nagaraj-854245259/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/u/BarathNagaraj/", 
    icon: <FaCode fontSize={25} className="hover:opacity-80" />,
  },
];
