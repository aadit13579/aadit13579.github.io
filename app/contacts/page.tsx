import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-[#0F172A]">
      {/* Header */}
      <section className="mx-auto max-w-15xl px-8 pb-12 pt-16 md:px-16 md:pt-20">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#008B8B] transition-transform duration-200 hover:-translate-x-1"
        >
          ← Back Home
        </Link>

        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
              Contact
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-sm text-slate-500">
              Let’s connect
            </span>
          </div>

          <h1 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-7xl">
            Let’s talk
            <span className="text-[#008B8B]">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#475569]">
            Whether it’s about a project, research, an internship, or just
            something interesting in computer systems, I’d be happy to hear
            from you.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-15xl px-8 py-16 md:px-16 md:py-20">
          <div className="grid max-w-4xl gap-6 md:grid-cols-2">
            <a
              href="mailto:aaditlele13@gmail.com"
              className="rounded-2xl border border-slate-200 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#008B8B]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
                Email
              </p>
              <h2 className="mt-4 font-serif text-2xl">
                aaditlele13@gmail.com
              </h2>
              <p className="mt-2 text-sm text-[#475569]">
                Get in touch directly
              </p>
            </a>

            <a
              href="https://github.com/aadit13579"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#008B8B]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
                GitHub
              </p>
              <h2 className="mt-4 font-serif text-2xl">
                github.com/aadit13579
              </h2>
              <p className="mt-2 text-sm text-[#475569]">
                Projects and experiments
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/your-linkedin/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#008B8B]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
                LinkedIn
              </p>
              <h2 className="mt-4 font-serif text-2xl">
                Aadit Lele
              </h2>
              <p className="mt-2 text-sm text-[#475569]">
                Professional profile
              </p>
            </a>

            <div className="rounded-2xl border border-slate-200 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
                Based in
              </p>
              <h2 className="mt-4 font-serif text-2xl">
                Thane, India
              </h2>
              <p className="mt-2 text-sm text-[#475569]">
                Computer Engineering · FCRIT Vashi
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
                Phone
            </p>
            <h2 className="mt-4 font-serif text-2xl">
                +91 8591837549
            </h2>
            <p className="mt-2 text-sm text-[#475569]">
                Available for professional enquiries
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-15xl px-8 py-10 md:px-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Aadit Lele · Computer Engineering
            </p>

            <Link
              href="/projects"
              className="text-sm font-semibold text-[#008B8B] transition-transform duration-200 hover:translate-x-1"
            >
              Explore my projects →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}