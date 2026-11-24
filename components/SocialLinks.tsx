import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/content";

// Round icon buttons for GitHub and LinkedIn. Links come from profile.links in lib/content.ts.
const items = [
  { label: "GitHub", href: profile.links.github, Icon: Github, tone: "text-fg hover:border-white hover:bg-white hover:text-night hover:shadow-white/20" },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin, tone: "text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-[#0A66C2]/40" },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-4 ${className}`} aria-label="Social profiles">
      {items.filter((i) => i.href).map(({ label, href, Icon, tone }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} profile (opens in a new tab)`}
            title={label}
            className={`grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 shadow-lg shadow-transparent transition duration-300 hover:scale-110 hover:-translate-y-0.5 ${tone}`}
          >
            <Icon size={22} />
          </a>
        </li>
      ))}
    </ul>
  );
}
