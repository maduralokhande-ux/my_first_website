"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/content";

const items = ["About", "Education", "Skills", "Projects", "Experience", "Achievements", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-lg font-semibold">{profile.name}</a>
        <ul className="hidden gap-6 text-sm text-muted md:flex">
          {items.map((i) => (
            <li key={i}><a className="transition-colors hover:text-accent" href={`#${i.toLowerCase()}`}>{i}</a></li>
          ))}
        </ul>
        <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line bg-paper px-6 py-3 md:hidden">
          {items.map((i) => (
            <li key={i}>
              <a className="block py-2 text-muted" href={`#${i.toLowerCase()}`} onClick={() => setOpen(false)}>{i}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
