import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Geoffrey Nguyen | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Geoff',
  subtitle: "I'm a Software Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm Geoff and I'm a software developer. I love tinkering and devising solutions to challenging tasks, and love to learn new technologies and tools to better equip myself in these pursuits. I also have a passion for helping people and I enjoy seeing the impact of my work in this endeavour.",
  paragraphTwo:
    'I have a focus on python from backend development to automated testing and webscraping to even game development.',
  paragraphThree:
    "Below you can find a collection of projects I've worked on. I'd love to connect and collaborate!",
  resume: 'GeoffreyNguyen_Resume.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gardenway.png',
    title: 'Gardenway',
    info: 'Fullstack app that services a website for an online garden center.',
    info2:
      'Backend is built using Django and provides MySQL storage, CRUD using the Django REST framework, authentication using JWT and pytest automated testing. Frontend will be built using ReactJS.',
    url: '',
    repo: 'https://github.com/nougat-rey/gardenway',
  },
  {
    id: nanoid(),
    img: 'engineering_project.png',
    title: 'Smart sensor‑based sleep therapy using biofeedback',
    info: 'A system that focuses on improving sleep quality through temperature & humidity regulation, detection of sleep phases from heart rate and control of surrounding light and music.',
    info2: '',
    url: '',
    repo: 'https://github.com/nougat-rey/FourthYearProject',
  },
  {
    id: nanoid(),
    img: 'webscraper.png',
    title: 'Business Listings Webscraper',
    info: 'Webscraper that uses Selenium Webdriver in combination with Beautiful Soup to obtain the contact info of businesses in Ottawa from YellowPages.',
    info2: '',
    url: '',
    repo: 'https://github.com/nougat-rey/business-list-procurement',
  },
  {
    id: nanoid(),
    img: 'unggoy_runner.png',
    title: 'Halo - Unggoy Runner',
    info: 'Game built using the pygame library. The user plays as an unggoy (grunt) from the Halo universe as it tries to evade the flood infection form coming after it.',
    info2: 'This was a passion project as an avid fan of the Halo universe.',
    url: 'https://youtu.be/bq7V6-kzDR0',
    repo: 'https://github.com/nougat-rey/unggoy-runner',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'geoffrey.nguyen9@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://ca.linkedin.com/in/geoffreynguyen77',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nougat-rey',
    },
  ],
};
