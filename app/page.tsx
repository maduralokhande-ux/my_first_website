import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, User } from "lucide-react";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { about, achievements, education, experience, interests, profile, projects, skills } from "@/lib/content";

const Link = ({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) =>
  href ? (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-accent">
      {icon}{children}
    </a>
  ) : null;

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid min-h-screen max-w-5xl items-center gap-12 px-6 pt-24 md:grid-cols-[1fr_280px]">
          <div className="rise">
            <p className="mb-4 text-sm uppercase tracking-widest text-muted">B.Sc. Computer Science · {profile.location}</p>
            <h1 className="font-serif text-5xl font-semibold leading-tight md:text-6xl">{profile.name}</h1>
            <p className="mt-5 max-w-xl font-serif text-2xl text-accent">{profile.headline}</p>
            <p className="mt-5 max-w-xl text-muted">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition hover:bg-accent">
                Explore My Work <ArrowDown size={16} />
              </a>
              <a href={profile.resumeFile} download className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm transition hover:border-accent hover:text-accent">
                Download Resume <Download size={16} />
              </a>
            </div>
          </div>
          <div className="rise mx-auto aspect-[4/5] w-56 overflow-hidden rounded-t-full border border-line bg-[#ebe3d6] md:w-full" style={{ animationDelay: ".15s" }}>
            {profile.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-muted" role="img" aria-label="Photo placeholder">
                <User size={48} strokeWidth={1.2} />
                <span className="text-xs">Add your photo</span>
              </div>
            )}
          </div>
        </section>

        <Section id="about" title="About">
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
            {about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>

        <Section id="education" title="Education">
          {education.map((e) => (
            <div key={e.degree} className="border-l-2 border-accent pl-6">
              <p className="text-sm text-muted">{e.years}</p>
              <h3 className="font-serif text-xl font-semibold">{e.degree}</h3>
              <p>{e.institution}</p>
              <p className="text-sm text-muted">{e.note}</p>
            </div>
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted">{s.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <li key={i} className="rounded-full border border-line px-3 py-1 text-sm transition hover:border-accent hover:text-accent">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-12">
            {projects.map((p, n) => (
              <article key={p.title} className="border-t border-ink pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-3xl font-semibold"><span className="mr-3 text-accent">0{n + 1}</span>{p.title}</h3>
                  <span className="shrink-0 text-sm text-muted">{p.period}</span>
                </div>
                <p className="mt-1 text-muted">{p.kind}</p>
                <p className="mt-4 max-w-2xl">{p.description}</p>
                <dl className="mt-4 grid max-w-2xl gap-3 text-sm sm:grid-cols-2">
                  <div><dt className="font-medium">My contribution</dt><dd className="text-muted">{p.contribution}</dd></div>
                  <div><dt className="font-medium">Outcome</dt><dd className="text-muted">{p.outcome}</dd></div>
                </dl>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs">
                  {p.tech.map((t) => <li key={t} className="rounded bg-[#ebe3d6] px-2 py-1">{t}</li>)}
                </ul>
                <div className="mt-4 flex gap-5">
                  {p.github ? <Link href={p.github} icon={<Github size={16} />}>Code</Link> : <span className="text-xs text-muted">GitHub link coming soon</span>}
                  <Link href={p.live} icon={<ExternalLink size={16} />}>Live demo</Link>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((e) => (
            <div key={e.role} className="border-l-2 border-accent pl-6">
              <p className="text-sm text-muted">{e.period}</p>
              <h3 className="font-serif text-xl font-semibold">{e.role}</h3>
              <p className="text-sm text-muted">{e.org}</p>
              <p className="mt-2">{e.detail}</p>
            </div>
          ))}
        </Section>

        <Section id="achievements" title="Achievements">
          <ul className="space-y-4">
            {achievements.map((a) => (
              <li key={a.title}><h3 className="font-medium">{a.title}</h3><p className="text-sm text-muted">{a.detail}</p></li>
            ))}
          </ul>
          <h3 className="mb-3 mt-12 text-sm font-medium uppercase tracking-wider text-muted">Interests</h3>
          <ul className="flex flex-wrap gap-2">
            {interests.map((i) => <li key={i} className="rounded-full border border-line px-3 py-1 text-sm">{i}</li>)}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-lg font-serif text-3xl">Let&apos;s build something together.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link href={`mailto:${profile.email}`} icon={<Mail size={16} />}>{profile.email}</Link></li>
            <li><Link href={`tel:${profile.phone.replace(/\s/g, "")}`} icon={<Phone size={16} />}>{profile.phone}</Link></li>
            <li className="inline-flex items-center gap-2"><MapPin size={16} />{profile.location}</li>
            <li><Link href={profile.links.github} icon={<Github size={16} />}>GitHub</Link></li>
            <li><Link href={profile.links.linkedin} icon={<Linkedin size={16} />}>LinkedIn</Link></li>
          </ul>
          <a href={`mailto:${profile.email}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition hover:bg-accent">
            <Mail size={16} /> Send an email
          </a>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
