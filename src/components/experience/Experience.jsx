import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />

      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "ACORE IT HUB Pvt. Ltd.",
    position: "Senior Full Stack Developer",
    time: "June 2025 – Present",
    location: "India",
    description:
      "Leading end-to-end development of large-scale MERN applications focused on geo-based property listings, travel services, and booking platforms. Responsible for system architecture, backend performance optimization, and building secure, scalable APIs. Actively involved in designing admin and super-admin dashboards, payment workflows, refund systems, and coupon engines while ensuring high performance using caching and optimized database queries.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "JWT",
    ],
  },

  {
    title: "Kiaan Technology (Alexandra Tech Lab)",
    position: "Full Stack Developer",
    time: "December 2024 – May 2025",
    location: "India",
    description:
      "Worked on production-ready full-stack applications including inventory management, POS systems, and e-commerce platforms. Built scalable frontend interfaces using React.js and Tailwind CSS and developed RESTful backend APIs with Node.js and Express. Implemented role-based authentication, optimized application performance, and managed end-to-end feature development for transactional systems.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
  },

  {
    title: "Sion Datamatics Pvt. Ltd.",
    position: "Software Engineer (Frontend / Full Stack)",
    time: "September 2023 – October 2024",
    location: "Indore",
    description:
      "Developed enterprise-grade React.js applications for business intelligence and dashboard-driven systems. Integrated frontend applications with backend APIs, handled complex state management using Redux Toolkit, and built reusable UI components. Also contributed to backend features using Node.js and Express while mentoring interns and participating in code reviews.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },

  {
    title: "Cybrom Technology, Bhopal",
    position: "Junior Full Stack Developer",
    time: "February 2022 – September 2023",
    location: "Bhopal",
    description:
      "Started my professional journey working on full-stack web applications using React.js and Django. Built CMS platforms, business websites, and REST APIs using Django REST Framework. Worked on database design, authentication systems, admin panels, and SEO-friendly responsive websites while gaining a strong foundation in full-stack development.",
    tech: [
      "React.js",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "MySQL",
      "HTML",
      "CSS",
    ],
  },
];
