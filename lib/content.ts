// ✏️ EDIT YOUR CONTENT HERE. Anything marked TODO is a placeholder, not from your resume.
export const profile = {
  name: "Madura Lokhande",
  headline: "Computer Science student building clean, responsive web experiences.",
  intro:
    "I'm a B.Sc. Computer Science student in Nagpur who loves turning ideas into interactive pages with HTML, CSS and JavaScript.",
  location: "Nagpur, India",
  email: "maduralokhande@gmail.com",
  phone: "+91 8080550645",
  resumeFile: "/Madura_Lokhande_Resume.docx",
  photo: "", // TODO: add e.g. "/photo.jpg" (put the file in /public)
  links: {
    github: "", // TODO: https://github.com/your-username
    linkedin: "", // TODO: https://linkedin.com/in/your-profile
  },
};

export const about = [
  "I'm currently in the third year of my B.Sc. in Computer Science. Web development, especially JavaScript, is where I enjoy learning the most, because you can see your work come alive in the browser straight away.",
  "I learn best by building. My recent projects, a skincare shop website and a music player, taught me how to structure layouts, handle user interaction and keep interfaces simple to use.",
  "I'm looking for an opportunity to apply my skills in a professional setting, keep sharpening my problem-solving, and grow as a developer.",
];

export const education = [
  {
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    institution: "TODO: University / College name",
    years: "2024 – 2027",
    note: "Currently pursuing, 3rd year.",
  },
];

export const skills = [
  { group: "Languages", items: ["HTML", "CSS", "JavaScript", "C", "C++", "Java"] },
  { group: "Web Development", items: ["Responsive Design", "DOM Manipulation"] },
  { group: "Tools & Practices", items: ["VS Code", "Agile"] },
  { group: "Professional", items: ["Problem Solving", "Basic Debugging"] },
];

export const projects = [
  {
    title: "GlowCare",
    kind: "Skincare shopping website",
    period: "May – Jun 2026",
    description:
      "A responsive multi-page skincare store with Home, Products, Cart and About Us pages, and product sections for facewash, serum, sunscreen and more.",
    contribution: "Designed and built the pages, navigation and product layouts.",
    outcome: "Layouts adapt cleanly across screen sizes using Flexbox and CSS Grid.",
    tech: ["HTML", "CSS", "JavaScript", "Flexbox", "Grid"],
    github: "", // TODO
    live: "", // TODO
  },
  {
    title: "Spotify Clone",
    kind: "Music player",
    period: "May – Jun 2026",
    description:
      "A Spotify-inspired player with play, pause, next and previous controls, a progress bar, and song duration and current time that update live.",
    contribution: "Built the player logic and interface using DOM manipulation and event handling.",
    outcome: "A fully interactive player running in plain JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "DOM", "Events"],
    github: "", // TODO
    live: "", // TODO
  },
];

// Your resume lists no formal work experience, so this honestly shows project work.
export const experience = [
  {
    role: "Self-directed web projects",
    org: "Personal projects",
    period: "May – Jun 2026",
    detail: "Designed, built and iterated on two front-end projects end to end.",
  },
  // TODO: add internships, volunteering or leadership roles when you have them.
];

export const achievements = [
  { title: "Certificate course in computer awareness", detail: "Foundational computing certification." },
  // TODO: add awards, hackathons or other recognition.
];

export const interests = ["Web development", "JavaScript", "Problem solving", "Learning new technologies", "Hands-on projects"];
