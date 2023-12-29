import {
    mobile,backend,creator,web,
    // Technologies
    javascript,html,css,reactjs,expressjs,java,c,mysql,aws,django,python,tailwind,nodejs,mongodb,git,figma,docker,
    // Companies
    favtutor,chegg,birdeye,
    // Projects
    inotebook,pollingwebsite,mycodeexecuter,threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About", 
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Cloud practitioner",
    icon: mobile,
  },
  {
    title: "DSA problem solver",
    icon: creator,
  },
  {
    title: "Subject Matter Expert",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "C",
  //   icon: c,
  // },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Express js",
    icon: expressjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Backend Engineer Intern",
    company_name: "Birdeye",
    icon: birdeye,
    iconBg: "#E6DEDD",
    date: "December 2023 - Current",
    points: [
      "Working on Spring and Springboot technologies",
      "Working on Virtual Private Cloud.",
    ],
  },
  {
    title: "Subject Matter Expert ( Computer Science )",
    company_name: "Chegg",
    icon: chegg,
    iconBg: "#E6DEDD",
    date: "March 2023 - October 2023",
    points: [
      "Working on answering technical question of computer science asked by students",
      "Solving Database Queries, Coding Problems, Designing Database Schema, Creating Full stack websites",
    ],
  },
  {
    title: "Subject Matter Expert ( JAVA )",
    company_name: "FavTutor",
    icon: favtutor,
    iconBg: "#383E56",
    date: "June 2022 - August 2022",
    points: [
      "Working on answering programming questions of Java asked by students",
      "Conducted live sessions to assist them",
      "Solving Java projects based on Object Oriented Programming and solving Medium to Hard level DSA problems."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Neelesh proved me wrong.",
    name: "Rittik Saxsena",
    designation: "Associate Automation Engineer",
    company: "ANM",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Neelesh does.",
    name: "Pranjal Goyal",
    designation: "Associate Consultant",
    company: "Oracle Finance",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Neelesh optimized my website, it response time enhanced by 50%. We can't thank them enough!",
    name: "Raghav Maheshwari",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "iNotebook",
    description:
      "iNoteBook, a MERN app, simplifies note-taking with Speech-to-Text, CRUD operations, and JWT security. Global Notes allow public sharing for collaborative engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: inotebook,
    source_code_link: "https://github.com/AggarwalNeelesh/iNotebook",
  },
  {
    name: "Run My Code",
    description:
      "Run My Code is a MERN application utilizing Judge0 CE API for code execution. It accepts code, input, and language, generates output, stores results, enables CRUD operations, and incorporates Random DSA problems .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "crud",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      },
    ],
    image: mycodeexecuter,
    source_code_link: "https://github.com/AggarwalNeelesh/Run-My-Code",
  },
  {
    name: "Polling Website",
    description:
      "The Polling Website, a Django application, features a user-friendly interface for posting and answering questions. Users can vote, contribute questions, and utilize tag-based filtering.",
    tags: [
      {
        name: "Pyhton",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Authentication",
        color: "pink-text-gradient",
      },
    ],
    image: pollingwebsite,
    source_code_link: "https://github.com/AggarwalNeelesh/Poll-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };