import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "ABHISHEK AN",
  initials: "AN",
  location: "Bengaluru, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with Kotlin, NextJS, Typescript, and Django. I have over 4 years of experience in the tech industry.",
  avatarUrl: "https://avatars.githubusercontent.com/u/22658573?v=4",
  personalWebsiteUrl: "https://abhishekan.dev",
  contact: {
    email: "me@abhishekan.dev",
    tel: "+919448997000",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/DarkAbhi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishek-an/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/im_abhishekan",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Jain University",
      degree: "Bachelor's in Computer Applications",
      start: "2018",
      end: "2021",
    },
    {
      school: "Jain College, V.V Puram",
      degree: "Commerce - Accounts, Business Studies, Statistics, Computer Science",
      start: "2016",
      end: "2018",
    },
    {
      school: "BNM Public School",
      degree: "ICSE",
      start: "2006",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Appiness Interactive Pvt Ltd",
      link: "https://www.appinessworld.com/",
      badges: [],
      title: "Software Developer - Mobile",
      start: "2022",
      end: "Present",
      description:
        "Worked with architects, engineers, and product teams of clients like BigBasket, AgriApp.",
    },
    {
      company: "Reading Right",
      link: "https://www.readingright.in/",
      badges: ["Remote", "Internship"],
      title: "Junior Software Engineer",
      start: "2021",
      end: "2021",
      description:
        "An organization to have established a whole new system of education solely based on news articles. I was responsible for releasing the first version of the product & leading the Android app development and working with other teams of the technology team in building the product :)",
    },
    {
      company: "Adium Technologies Pvt Ltd",
      link: "https://web.archive.org/web/20230416084330/https://www.iku.earth/",
      badges: ["Startup"],
      title: "Co-founder & CTO",
      start: "2021",
      end: "2022",
      description:
        "Oversaw and managed technology initiatives, team management, and hiring with a vision to fight climate change using tech.",
    },
    {
      company: "Adium Technologies Pvt Ltd",
      link: "https://web.archive.org/web/20230416084330/https://www.iku.earth/",
      badges: ["First Job"],
      title: "Android Developer",
      start: "2020",
      end: "2021",
      description: "Worked on the overall development of Printola app, migrating the application from Ionic framework to native Android. Built the MVP for Iku - a community platform for sustainability enthusiasts.",
    },
  ],
  skills: [
    "Java/Kotlin",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Python",
    "Django",
    "Docker",
    "AWS/DigitalOcean/Google Cloud"
  ],
  projects: [
    {
      title: "Terrum (Previously Iku)",
      techStack: [
        "Startup",
        "Tech Lead",
        "Android",
        "Kotlin",
        "Typescript",
        "NextJS",
        "Django",
        "AWS/Digitalocean",
      ],
      description:
        "A platform to find your community that celebrates all your efforts towards living more sustainably",
      link: {
        label: "Terrum",
        href: "https://terrum.in",
      },
    },
    {
      title: "AgriApp",
      techStack: ["Consulting", "Android"],
      description:
        "AgriApp is a complete solution for crop production and management. It provides the best information on Crop Production, Crop Protection, smart farming with agriculture, and allied services.",
      link: {
        label: "Terrum",
        href: "https://agriapp.com",
      },
    },
    {
      title: "Life Tracker",
      techStack: [
        "Side Project",
        "Python",
        "Django",
        "Docker",
        "telegram-bot",
        "PostgreSQL",
      ],
      description:
        "A Django application that tracks various personal life metrics, it uses Docker for containerization and integrates with a Telegram bot for data input",
      link: {
        label: "Life Tracker",
        href: "https://github.com/DarkAbhi/life-backend",
      },
    },
    {
      title: "COVID Karnataka",
      techStack: ["Side Project", "Android", "Kotlin"],
      description:
        "Android app that shows COVID Resources in Bangalore by volunteers of Team LBTC and to track COVID cases in Karnataka.",
      link: {
        label: "COVID Karnataka",
        href: "https://github.com/DarkAbhi/COVID-Karnataka",
      },
    },
    {
      title: "BigBasket Meal Planner",
      techStack: [
        "Lead Android Developer",
        "Consulting",
        "Android",
        "Kotlin",
        "Java",
      ],
      description:
        "This application offers a modern approach to organizing your daily meals, utilizing cutting-edge technology for personalized meal recommendations.",
      link: {
        label: "BigBasket Meal Planner",
        href: "https://play.google.com/store/apps/details?id=com.foodmates",
      },
    },
    {
      title: "Reading Right",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Reading Right is a solution that helps students learn from field experts by immersing them in contemporary articles, taken from multiple educationally relevant sources, explained in an oversimplified manner.",
      link: {
        label: "Reading Right Android App",
        href: "https://play.google.com/store/apps/details?id=in.readingright.app",
      },
    },
  ],
} as const;
