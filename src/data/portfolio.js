export const profile = {
  name: "Vaishnavi Jaimini",
  title: "Full-Stack Software Developer",
  location: "Ahmedabad, India",
  yearsOfExperience: "3+",
  email: "vaishnavijaimini04@gmail.com",
  github: "https://github.com/vaishnavi-jaimini",
  linkedin: "https://www.linkedin.com/in/vaishnavi-jaimini",
  bio: [
    "I'm Vaishnavi — a full-stack developer, 3 years deep. Backend, frontend, cloud, databases, the occasional enterprise system nobody wants to touch.",
    "I've written in .NET, Java, Python and React, and I have opinions about all of them. Mostly I just like building things that work, and then making them work better.",
  ],
};

export const skillGroups = [
  {
    label: "Languages",
    skills: ["C#", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["React", "Angular", "HTML5", "CSS3"],
  },
  {
    label: "Backend & Data",
    skills: [
      ".NET / ASP.NET Core",
      "Node.js",
      "Entity Framework Core",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    label: "Tools & Platforms",
    skills: ["Docker", "Git", "Vercel", "REST APIs", "Power Apps"],
  },
];

export const projects = [
  {
    name: "Teacher Appraisal System",
    description:
      "A multi-role appraisal platform built for a school. Teachers self-grade against a 30+ question bank, principals rate the same criteria and see side-by-side comparisons, and admins manage the question bank and rosters. Ships PDF, CSV and Excel exports plus OTP-based password recovery.",
    tech: ["Node.js", "PostgreSQL", "Vercel", "HMAC Auth"],
    link: "https://github.com/vaishnavi-jaimini/teacher-appraisal-system",
    linkLabel: "View on GitHub",
  },
  {
    name: "EmployeeForm",
    description:
      "A layered employee management system with auto-generated employee codes, photo uploads with magic-byte validation, filtered reporting by date range and name, and a repository/service architecture backed by 50 xUnit tests.",
    tech: ["ASP.NET Core MVC", "EF Core", "SQL Server", "Docker", "Serilog"],
    link: "https://github.com/vaishnavi-jaimini/EmployeeForm",
    linkLabel: "View on GitHub",
  },
  {
    name: "VaishnaviSolar",
    description:
      "A retailer website built for a solar energy business, covering the product catalog and customer lead capture end to end.",
    tech: [".NET", "Angular", "SQL"],
    link: null,
  },
  {
    name: "LocateMsg",
    description:
      "A location-triggered messaging automation — the moment a person's device reaches its destination, a message fires to the intended recipient automatically.",
    tech: ["Geofencing", "GPS"],
    link: null,
  },
  {
    name: "AI Presentation Builder",
    description:
      "A tool that turns a topic or outline into a ready-to-use slide deck, using the ChatGPT API to generate slide content and structure on a FastAPI backend.",
    tech: ["Python", "FastAPI", "MongoDB", "ChatGPT API"],
    link: null,
  },
  {
    name: "Fleet Management System",
    description:
      "A system for tracking and managing a vehicle fleet — covering vehicle records, assignments, and operations through a relational backend.",
    tech: [".NET", "Angular", "SQL"],
    link: null,
  },
];
