import corpcommentImg from "@/public/corpcomment.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import trekbagImg from "@/public/trekbag.png";
import tastytreatImg from "@/public/food-delivery-app.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const projectsData = [
    {
        title: "CorpComment",
        description:
            "CorpComment is a public feedback platform where users can give feedback to companies.",
        tags: [
            "React",
            "TypeScript",
            "Tailwind",
            "Radix UI",
            "Zustand",
            "Vite",
            "REST API",
        ],
        imageUrl: corpcommentImg,
        demoUrl: "https://corpcomment.onrender.com",
        githubUrl: "https://github.com/amniuelmohamed/corpcomment",
    },
    {
        title: "Tasty Treat",
        description:
            "TasteTreat is a food delivery website. It's easy to use and lets customers find and order their favorite meals from a wide selection.",
        tags: ["React", "Bootstrap", "Redux", "Firebase"],
        imageUrl: tastytreatImg,
        demoUrl: "https://fooddelivery-23f82.web.app",
        githubUrl: "https://github.com/amniuelmohamed/react-food-delivery",
    },
    {
        title: "Trekbag",
        description:
            "Trekbag is a travel packing assistant designed to help you remember everything you need for your trips.",
        tags: ["React", "Typescript", "Tailwind", "Zustand", "Vite"],
        imageUrl: trekbagImg,
        demoUrl: "https://trekbag.onrender.com",
        githubUrl: "https://github.com/amniuelmohamed/trekbag",
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Typescript", "Tailwind", "Vite"],
        imageUrl: wordanalyticsImg,
        demoUrl: "https://word-analytics.onrender.com",
        githubUrl: "https://github.com/amniuelmohamed/word-analytics",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "REST API",
    "Git",
    "Tailwind",
    "Bootstrap",
    "Redux",
    "Zustand",
    "Framer Motion",
] as const;
