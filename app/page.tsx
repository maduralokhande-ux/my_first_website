import { ArrowDown, Award, Download, ExternalLink, Github, Globe, Linkedin, Mail, MapPin, Phone, Sparkles, User, Users, Wrench, Code2, GraduationCap, Briefcase } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";
import { about, achievements, education, experience, interests, profile, projects, skills } from "@/lib/content";

const skillIcons = [Code2, Globe, Wrench, Users];

type ContactItem = { label: string; value: string; href: string; icon: React.ReactNode; tone?: string };
const pretty = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function Home() {
  const contacts: ContactItem[] = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <Mail /> },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: <Phone /> },
    { label: "GitHub", value: pretty(profile.links.github), href: profile.links.github, icon: <Github />, tone: "bg-white/10 text-fg" },
    { label: "LinkedIn", value: profile.links.linkedin ? pretty(profile.links.linkedin) : "Add your LinkedIn link in lib/content.ts", href: profile.links.linkedin, icon: <Linkedin />, tone: "bg-[#0A66C2]/15 text-[#0A66C2]" },
  ];

  return (
    <>
      <Nav />
      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28">
          <div className="bg-grid absolute inset-0" aria-hidden />
          <div className="float absolute -left-24 top-20 h-80 w-80 rounded-full bg-violet/30 blur-3xl" aria-hidden />
          <div className="float-slow absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-rose/20 blur-3xl" aria-hidden />
          <div className="float absolute right-[12%] top-28 hidden h-6 w-6 rotate-12 rounded-md border border-amber/60 md:block" aria-hidden />
          <div className="float-slow absolute bottom-24 left-[8%] hidden h-4 w-4 rounded-full bg-rose/70 md:block" aria-hidden />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-muted">
                <Sparkles size={14} className="text-amber" /> B.Sc. Computer Science · {profile.location}
              </p>
              <h1 className="rise mt-6 font-serif text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl" style={{ animationDelay: ".1s" }}>
                Hi, I&apos;m <span className="gradient-text italic">{profile.name}</span>
              </h1>
              <p className="rise mt-6 max-w-xl text-xl text-fg/90" style={{ animationDelay: ".25s" }}>{profile.headline}</p>
              <p className="rise mt-4 max-w-xl text-muted" style={{ animationDelay: ".4s" }}>{profile.intro}</p>
              <div className="rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: ".55s" }}>
                <a href="#projects" className="btn-primary">Explore My Work <ArrowDown size={16} /></a>
                <a href={profile.resumeFile} download className="btn-ghost">Download Resume <Download size={16} /></a>
              </div>
              <div className="rise mt-8 flex items-center gap-4" style={{ animationDelay: ".7s" }}>
                <span className="text-xs uppercase tracking-[.25em] text-muted">Find me on</span>
                <span className="h-px w-8 bg-white/20" aria-hidden />
                <SocialLinks />
              </div>
            </div>

            <div className="rise relative mx-auto w-64 sm:w-72 lg:w-full lg:max-w-sm" style={{ animationDelay: ".3s" }}>
              <div className="spin-slow absolute -inset-4 rounded-t-full bg-[conic-gradient(from_0deg,#8b5cf6,#f472b6,#fbbf24,#8b5cf6)] opacity-70 blur-md" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border-4 border-night bg-panel shadow-2xl">
                {profile.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover object-[60%_25%]" />
                ) : (
                  <div className="flex h-full items-center justify-center text-muted" role="img" aria-label="Photo placeholder"><User size={48} /></div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <Section id="about" eyebrow="Who I am" title="About Me">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-fg/90">
              {about.map((p, i) => <Reveal key={p} delay={i * 100}><p>{p}</p></Reveal>)}
            </div>
            <Reveal delay={150}>
              <div className="card p-6">
                <h3 className="font-serif text-xl font-semibold">Quick facts</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="flex items-center gap-3"><GraduationCap size={18} className="text-violet" /> B.Sc. Computer Science, 3rd year</li>
                  <li className="flex items-center gap-3"><MapPin size={18} className="text-rose" /> {profile.location}</li>
                  <li className="flex items-center gap-3"><Code2 size={18} className="text-amber" /> HTML · CSS · JavaScript</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ---------- Education ---------- */}
        <Section id="education" eyebrow="Learning" title="Education">
          <ol className="relative ml-3 space-y-8 border-l border-white/15 pl-8">
            {education.map((e) => (
              <li key={e.degree} className="relative">
                <span className="absolute -left-[41px] top-6 grid h-5 w-5 place-items-center rounded-full bg-night ring-2 ring-violet"><span className="h-2 w-2 rounded-full bg-rose" /></span>
                <Reveal>
                  <div className="card card-hover p-6">
                    <p className="text-sm font-medium text-rose">{e.years}</p>
                    <h3 className="mt-1 font-serif text-2xl font-semibold">{e.degree}</h3>
                    <p className="mt-1 text-fg/90">{e.institution}</p>
                    <p className="mt-1 text-sm text-muted">{e.note}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        {/* ---------- Skills ---------- */}
        <Section id="skills" eyebrow="What I work with" title="Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((s, n) => {
              const Icon = skillIcons[n % skillIcons.length];
              return (
                <Reveal key={s.group} delay={n * 90}>
                  <div className="card card-hover h-full p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-rose/30 text-rose"><Icon size={20} /></span>
                      <h3 className="font-serif text-xl font-semibold">{s.group}</h3>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.items.map((i) => <li key={i} className="chip">{i}</li>)}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>

        {/* ---------- Projects ---------- */}
        <Section id="projects" eyebrow="Selected work" title="My Projects">
          <p className="-mt-6 mb-12 max-w-xl text-muted">Two hands-on builds where I turned ideas into working, interactive websites.</p>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((p, n) => (
              <Reveal key={p.title} delay={n * 120}>
                <article className="card card-hover group flex h-full flex-col overflow-hidden hover:shadow-violet/20">
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} live demo`} className="block overflow-hidden border-b border-white/10 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} width={p.imageSize[0]} height={p.imageSize[1]} alt={`${p.title} website screenshot`} loading="lazy"
                      className="h-auto w-full transition duration-700 ease-out group-hover:scale-105" />
                  </a>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-2xl font-semibold">{p.title}</h3>
                      <span className="shrink-0 text-xs text-muted">{p.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-rose">{p.kind}</p>
                    <p className="mt-3 text-muted">{p.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => <li key={t} className="chip !py-0.5 text-xs">{t}</li>)}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink size={16} /> Live Demo</a>
                      <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost"><Github size={16} /> GitHub</a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ---------- Experience ---------- */}
        <Section id="experience" eyebrow="Journey" title="Experience">
          <ol className="relative ml-3 space-y-8 border-l border-white/15 pl-8">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span className="absolute -left-[43px] top-6 grid h-6 w-6 place-items-center rounded-full bg-night ring-2 ring-rose"><Briefcase size={12} className="text-rose" /></span>
                <Reveal>
                  <div className="card card-hover p-6">
                    <p className="text-sm font-medium text-rose">{e.period}</p>
                    <h3 className="mt-1 font-serif text-2xl font-semibold">{e.role}</h3>
                    <p className="text-sm text-muted">{e.org}</p>
                    <p className="mt-3 text-fg/90">{e.detail}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        {/* ---------- Achievements & Interests ---------- */}
        <Section id="achievements" eyebrow="Milestones" title="Achievements & Interests">
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((a) => (
              <Reveal key={a.title}>
                <div className="card card-hover flex h-full gap-4 p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber/30 to-rose/30 text-amber"><Award /></span>
                  <div><h3 className="font-serif text-xl font-semibold">{a.title}</h3><p className="mt-1 text-sm text-muted">{a.detail}</p></div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={100}>
              <div className="card h-full p-6">
                <h3 className="font-serif text-xl font-semibold">Interests</h3>
                <ul className="mt-4 flex flex-wrap gap-2">{interests.map((i) => <li key={i} className="chip">{i}</li>)}</ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ---------- Contact ---------- */}
        <Section id="contact" eyebrow="Say hello" title="Contact Me">
          <Reveal>
            <p className="max-w-2xl font-serif text-3xl leading-snug md:text-4xl">
              Let&apos;s build something <span className="gradient-text italic">great together.</span>
            </p>
            <p className="mt-4 max-w-xl text-muted">I&apos;m always happy to talk about web development, new opportunities or ideas worth building.</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {contacts.map((c, n) => {
              const inner = (
                <>
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition group-hover:scale-110 ${c.tone ?? "bg-gradient-to-br from-violet/30 to-rose/30 text-rose"}`}>{c.icon}</span>
                  <span className="min-w-0"><span className="block text-xs uppercase tracking-widest text-muted">{c.label}</span><span className="block truncate">{c.value}</span></span>
                </>
              );
              return (
                <Reveal key={c.label} delay={n * 80}>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="card card-hover group flex items-center gap-4 p-5">{inner}</a>
                  ) : (
                    <div className="card flex items-center gap-4 p-5 opacity-60">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={200}>
            <a href={`mailto:${profile.email}`} className="btn-primary mt-10"><Mail size={16} /> Send me an email</a>
          </Reveal>
        </Section>
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js &amp; Tailwind CSS
      </footer>
    </>
  );
}
