import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description:
    "About Aadit Lele, a Computer Engineering student interested in computer systems, distributed systems, compiler design, and efficient computing.",
};
export default function About() {
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

        <div className="max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
              About / Computer Engineering
            </span>

            <span className="text-slate-300">/</span>

            <span className="text-sm text-slate-500">
              FCRIT · 2023 – Present
            </span>
          </div>

          <h1 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-7xl">
            Building systems,
            <br />
            understanding what’s underneath
            <span className="text-[#008B8B]">.</span>
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#475569]">
            I’m Aadit Lele, a Computer Engineering student interested in the
            systems behind modern software, from distributed infrastructure
            and backend engineering to parallel computing and compiler design.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-15xl px-8 py-16 md:px-16 md:py-20">

          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">

            {/* Left */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
                01 / Background
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                A little about me.
              </h2>
            </div>

            {/* Right */}
            <div className="space-y-5 text-base leading-7 text-[#475569]">

              <p>
                I’m pursuing a B.Tech. in Computer Engineering with Honors in
                IoT and Embedded Systems at Fr. Conceicao Rodrigues Institute
                of Technology. I currently hold a CGPI of <strong>9.86/10</strong>.
                I ranked <strong>3rd across all branches in First Year</strong>
                and <strong>1st in Second Year</strong>.
              </p>

              <p>
                My interest in computing has gradually moved beyond building applications to understanding the systems that make them work. I became particularly interested in the layers of abstraction between software and hardware, and in how architecture, execution, and resource constraints affect the way software performs.
              </p>

              <p>
                I’ve had the opportunity to work across several layers of the
                stack. At IISER Mohali, I worked on a four-node Proxmox VE
                high-availability cluster, distributed Ceph storage,
                fault-tolerant networking, and infrastructure for scientific
                workloads. At BunderBrains, I worked on REST services,
                automation, data-processing pipelines, and production systems.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-15xl px-8 py-16 md:px-16 md:py-20">

          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">

            {/* Left */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
                02 / Where it started
              </p>
            </div>

            {/* Right */}
            <div className="space-y-5 text-base leading-7 text-[#475569]">

              <p>
                One area that particularly caught my attention was compiler design. Since it was not part of my formal coursework, I began exploring it independently through textbooks, research literature, and experimentation.What interested me was not simply how a compiler translates code, but the larger idea of how something written at a high level is transformed, optimized, and eventually executed by a machine. That curiosity has gradually shaped the areas I want to explore further: Computer Systems, Distributed Systems, Machine Learning Systems, Compiler Design, and Parallel Computing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-15xl px-8 py-16 md:px-16 md:py-20">

          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
                03 / Exploration
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Beyond the coursework.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-[#475569]">

              <p>
                Some of the areas I’m most interested in began outside my
                formal coursework. Since compiler design was not part of my
                curriculum, I started exploring it independently through
                textbooks, research literature, and experimentation.
              </p>

              <p>
                That exploration made me increasingly curious about how
                high-level software is translated, optimized, and eventually
                executed by hardware. It also changed how I approach projects:
                I tend to look beyond whether something works and ask how the
                underlying architecture affects its performance, scalability,
                and reliability.
              </p>

              <p>
                My recent work reflects that direction. VEDA explored
                asynchronous and concurrent processing for document
                accessibility, while my infrastructure work involved
                virtualization, distributed storage, networking, and
                fault-tolerant systems. I’m currently continuing this
                systems-oriented exploration through my work on an LLM
                Observatory Node.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Outside Computing */}
      <section>
        <div className="mx-auto max-w-15xl px-8 py-16 md:px-16 md:py-20">

          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
              04 / Outside Computing
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              There is life outside a terminal.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#475569]">
              I enjoy Indian classical music and have been learning both the
              sitar and classical vocals. I also spend time reading fiction
              and mythology. They’re a useful counterbalance to spending
              unreasonable amounts of time thinking about systems, code, and
              why something decided to throw an exception at 2 a.m.
            </p>
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