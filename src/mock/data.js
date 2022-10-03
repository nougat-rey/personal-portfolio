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
    'I have a focus on python from backend development and automated testing to webscraping and game development.',
  paragraphThree:
    "I'd love to connect and collaborate. Below you can find my resume and a collection of projects I've worked on.",
  resume: 'https://drive.google.com/uc?export=download&id=1ACgThnjE1m7T05qk0YNLIbYOSQ3Ynch1',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gardenway.png',
    title: 'Gardenway',
    info: 'Fullstack app that services a website for an online garden center.',
    info2:
      'Django backend • MySQL storage • JWT authentication • pytest automated testing • ReactJS frontend',
    url: '',
    repo: 'https://github.com/nougat-rey/gardenway',
  },
  {
    id: nanoid(),
    img: 'engineering_project.png',
    title: 'Smart sensor‑based sleep therapy using biofeedback',
    info: 'A system that focuses on improving sleep quality through temperature & humidity regulation, detection of sleep phases from heart rate and control of surrounding light and music.',
    info2: 'Java • SQL • JSON',
    url: '',
    repo: 'https://github.com/nougat-rey/FourthYearProject',
  },
  {
    id: nanoid(),
    img: 'webscraper.png',
    title: 'Business Listings Webscraper',
    info: 'Webscraper that obtains the contact info of businesses in Ottawa from YellowPages.',
    info2: 'Python • Selenium Webdriver • Beautiful Soup',
    url: '',
    repo: 'https://github.com/nougat-rey/business-list-procurement',
  },
  {
    id: nanoid(),
    img: 'unggoy_runner.png',
    title: 'Halo - Unggoy Runner',
    info: 'Passion project as an avid fan of the Halo universe. The user plays as an unggoy (grunt) from the Halo universe as it tries to evade the flood infection form coming after it.',
    info2: 'Python • pygame',
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
