import { TProject } from "@/types";

export const projects: TProject[] = [
  {
    id: "ahmadaldali",
    title: "Ahmad Aldali",
    description:
      "My Personal website",
    picture: "/images/projects/ahmad.jpeg",
    technologies: [
      "Typescript",
      "NextJs",
      "Javascript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    tasks: [
      "Developing my personal website to showcase my knowledge in nextJs",
    ],
    link: "/",
    isStar: true,
  },
  {
    id: "1",
    title: "Yoboo",
    description:
      "Your lifestyle is the first and most powerful medicine for feeling good and happy. It's the key to a healthy and energetic life. Get personalized insights and get to work on your own.",
    picture: "/images/projects/yoboo.png",
    technologies: [
      "Typescript",
      "Svelte",
      "Javascript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "GraphQL",
      "MongoDB",
      "Houdini",
      "Fastify",
      "Storybook",
      "Storyblok",
    ],
    tasks: [
      "Successfully replaced the team leader role in the FE side, ensuring project stability and zero downtime during the transition.",
      "Collaborated with over 40 B2P and B2B partners during my first year.",
      "Continuously optimizing performance, leading to significant improvements in application speed and responsiveness.",
    ],
    link: "https://yoboo.health",
    isStar: true,
  },
  {
    id: "2",
    title: "Eleni",
    description:
      "With Eleni, you'll have real-time visibility to your cash flow, accurate forecasting, and valuable insights to make informed financial decisions.",
    picture: "/images/projects/eleni.png",
    technologies: [
      "Python",
      "Django",
      "MySQL",
    ],
    tasks: [
      "Developing and maintaining the backend logic and data models of a web application that helps users to have a look at their business financial position, cash flow, and forecasting.",
      "Writing clean, reusable, and testable code, and following the best practices and standards of web development.",
    ],
    link: "https://app.eleni.finance/",
    isStar: true,
  },
  {
    id: "3",
    title: "Allmyfaves",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    picture: "/images/projects/allmyfaves.png",
    technologies: [
      "Php",
      "Laravel",
      "Javascript",
      "Vue",
      "Bootstrap",
      "HTML",
      "CSS",
      "MySQL",
      "AWS",
    ],
    tasks: [
      "Achieved a remarkable reduction in homepage response time from 4.5 seconds to approximately 1 second, significantly enhancing user experience.",
      "Executed a successful migration of a legacy database (~10 GB, serving 500K users), ensuring data integrity and system reliability.",
      "Seamlessly transitioned to a new system version, migrating data, users, domains, and branding elements without service interruption.",
    ],
    link: "https://allmyfaves.com",
    isStar: true,
  },
  {
    id: "4",
    title: "SummetPro",
    description: "Sumeet summarizes all your Google meetings, saving you tons of time spent on note-taking and long follow-up emails.",
    picture: "/images/projects/sumeet.png",
    technologies: [
      "Php",
      "Javascript",
      "React",
      "Bootstrap",
      "HTML",
      "CSS",
      "MySQL",
      "AWS Lambda",
      "S3"
    ],
    tasks: [
      "Developed a Chrome extension that effectively transcribes and summarizes Google meetings.",
      "Created essential APIs for the extension, including dashboard functionalities and payment integrations, streamlining operations.",
      "Successfully deployed projects on Nginx web servers, ensuring robust performance and reliability.",
    ],
    isStar: true,
  },
  {
    id: "5",
    title: "ZEOUR QMS",
    description: "Queue Management System to improve operational efficiency, enhances customer satisfaction, and boosts revenue by reducing wait times and organizing customer flow.",
    picture: "/images/projects/qms.png",
    technologies: [
      "Php",
      "Laravel",
      "Javascript",
      "VueJS",
      "Bootstrap",
      "HTML",
      "CSS",
      "MySQL",
      "Linux",
      "Apache",
      "AJAX",
      "jQuery",
      "C#",
      "Redis",
      "Pusher"
    ],
    tasks: [
      "Developed a full System (Queue Management System) from scratch to end according to SDLC.",
      "Developed multiple applications within QMS, for employees, customers, managers, and admins as microservices with flexibility for standalone or centralized operation, enhancing system adaptability.",
      "Innovated the first Telegram bot for the Queue Management System, enabling ticketing and appointment bookings through a popular messaging platform.",
      "Integrated the system with an SDK keypad device, a Digital Signage System, and a Feedback System for enhanced functionality."
    ],
    link: "https://www.zeour.co.uk/queue-management-system",
    isStar: true,
  },
  {
    id: "6",
    title: "Automatic Translation Android App",
    description: "Automatic Translation using deep learning",
    picture: "/images/projects/qms.png",
    technologies: [
      "Python",
      "Jave",
      "LSTM",
    ],
    tasks: [
      "Take image and extract text from image by OCR technique.",
      "Translate the text using Neural network.",
    ],
  },
  {
    id: "7",
    title: "Ethan Escape Game",
    description: "Midterm Project (3D Game).",
    picture: "/images/projects/qms.png",
    technologies: [
      "C#",
      "Unity",
      "Blender",
    ],
    tasks: [
      "Used Blender program to design characters and draw shapes and develop the environment of the game.",
      "Unity engine for programming.",
      "Programming language is C#.",
    ],
    link: "https://drive.google.com/file/d/1KO3782FbRK-qQr4subxgcJeJ9hVFcpeA/view?usp=drive_link"
  },
];
