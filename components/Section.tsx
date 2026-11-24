import Reveal from "./Reveal";

export default function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[.25em] text-rose">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">{title}</h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet to-rose" />
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
