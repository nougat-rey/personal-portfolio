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
    "I'm most comfortable with python, although I have some experience in Java, and I'm looking to implement projects in C++. I'm always looking to learn and improve.",
  paragraphThree:
    "Below you can find a collection of projects I'm most proud of. I hope we can connect and collaborate!",
  resume: 'GeoffreyNguyen_Resume.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
