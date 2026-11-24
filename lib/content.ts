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
  photo: "/madura-photo.jpeg", // file lives in /public
  links: {
    github: "https://github.com/maduralokhande-ux",
    linkedin: "https://www.linkedin.com/in/madura-lokhande/",
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

export const projects: {
  title: string; kind: string; period: string; description: string; contribution: string; outcome: string;
  tech: string[]; image: string; imageSize: [number, number]; github: string; live: string;
}[] = [
  {
    title: "GlowCare",
    kind: "Skincare E-commerce Website",
    period: "May – Jun 2026",
    description:
      "A skincare e-commerce website featuring product categories, product listings, shopping cart functionality and automatic bill calculation.",
    contribution: "Designed and built the pages, navigation and product layouts.",
    outcome: "Layouts adapt cleanly across screen sizes using Flexbox and CSS Grid.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/glowcare.jpeg",
    imageSize: [1884, 911],
    github: "https://github.com/maduralokhande-ux/skincare",
    live: "https://maduralokhande-ux.github.io/skincare/",
  },
  {
    title: "Spotify Clone",
    kind: "Music Player",
    period: "May – Jun 2026",
    description:
      "An interactive music player featuring 15 songs, playlists, play/pause controls, next/previous buttons and a real-time song timer.",
    contribution: "Built the player logic and interface using DOM manipulation and event handling.",
    outcome: "A fully interactive player running in plain JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/spotify-clone.jpeg",
    imageSize: [1902, 901],
    github: "https://github.com/maduralokhande-ux/spotify-clone",
    live: "https://maduralokhande-ux.github.io/spotify-clone/",
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
