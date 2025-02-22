import { TCompany } from "@/types/company";

export const companies: TCompany[] = [
  {
    id: "1",
    name: "Yoboo",
    position: "Front-End Developer",
    date: "Dec 2023 - Present",
    location: "Belgium",
    tasks: [
      "Developing the application in a flexible way to adapt into the regular changes in the flow and in a user-friendly responsive way.",
      "Engaging in daily meetings with the team to optimize the development process.",
      "Working directly with UI/UX designers and converting the designs to fast front-end web pages.",
      "Collaborating with testers to enhance their workflow, and improving overall team efficiency.",
      "Providing rapid support for service desk tickets, addressing both frontend and backend issues.",
    ],
    link: 'https://www.yoboo.be/en-gb/'
  },
  {
    id: "2",
    name: "Greppy Systems",
    position: "Full Stack Developer",
    date: "March 2022 - Dec 2023",
    location: "Romania",
    tasks: [
      "Developed and maintained web services and interfaces.",
      "Contributed to both front-end and back-end development, enhancing overall apps functionalities.",
      "Created new APIs and effectively utilized AWS services to improve system performance.",
      "Wrote comprehensive tests, troubleshot issues, and resolved bugs to ensure software reliability.",
    ],
    link: 'https://www.greppysystems.com/'
  },
  {
    id: "3",
    name: "ZEOUR LTD",
    position: "Software Engineer",
    date: "July 2019 - June 2022",
    location: "UK",
    tasks: [
      "Developed a full System (Queue Management System) from scratch to end according to SDLC.",
      "Developed multiple applications within QMS, for employees, customers, managers, and admins.",
      "Integrated the system with an SDK keypad device, a Digital Signage System, and a Feedback System for enhanced functionality.",
      "Developed a Self-Service Kiosk capable of accepting cash from users.",
      "Led a team of six members, driving project success through effective leadership and collaboration.",
    ],
    link: 'https://www.zeour.co.uk/'
  },
];
