export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-8 md:grid-cols-[180px_1fr]">
        <h2 className="font-serif text-2xl font-semibold text-accent md:pt-1">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
