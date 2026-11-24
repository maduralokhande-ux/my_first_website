"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/content";

const items = ["About", "Education", "Skills", "Projects", "Experience", "Achievements", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach((i) => { const el = document.getElementById(i.toLowerCase()); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? "border-b border-white/10 bg-night/80 backdrop-blur-xl" : ""}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-xl font-semibold"><span className="gradient-text">{profile.name.split(" ")[0]}</span><span className="text-rose">.</span></a>
        <ul className="hidden items-center gap-1 text-sm lg:flex">
          {items.map((i) => {
            const on = active === i.toLowerCase();
            return (
              <li key={i}>
                <a href={`#${i.toLowerCase()}`} aria-current={on ? "true" : undefined}
                  className={`relative rounded-full px-3 py-1.5 transition ${on ? "bg-white/10 text-white" : "text-muted hover:text-white"}`}>{i}</a>
              </li>
            );
          })}
        </ul>
        <button className="rounded-lg p-2 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/10 px-6 py-3 lg:hidden">
          {items.map((i) => (
            <li key={i}>
              <a href={`#${i.toLowerCase()}`} onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 ${active === i.toLowerCase() ? "bg-white/10 text-white" : "text-muted"}`}>{i}</a>
            </li>
          ))}
        </ul>
      )}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet via-rose to-amber" style={{ width: `${progress}%` }} aria-hidden />
    </header>
  );
}
