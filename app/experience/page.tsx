"use client";

import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Bunderbrains",
    subtitle: "Junior Developer Intern",
    type: "Systems",
    date: "Sept 2025 – Feb 2026",
    description:
      "Worked to build and maintain company applications, websites while building and integrating new features.",
    highlights: [
      "Built and deployed 25+ REST Modules across 4 core systems",
      "Re-architected the media pipeline and optimised cloud storage and pipeline",
      "Deployed AI-driven structured data extraction to automate 5+ operational workflows",
      "Resolved 30+ production bugs across live platforms",
    ],
    stack: ["Python", "MySQL", "Flutter", "FastAPI", "scripts", "docker"],
    featured: true
  },
  {
    number: "02",
    title: "IISER Mohali+Suraj Informatics",
    type: "Research / Systems",
    date: "June 2025 – June 2026",
    subtitle:"Research Infrastructure Intern",
    description:
      "Worked with IISER and Suraj Informatics under a research project involving planning and building a data-centre from bare-metal college PC's from scratch",
    highlights: [
      "Designed a VLAN-segmented, fault-tolerant network topology",
      " 4-node Proxmox VE high-availability cluster ",
      "Zero-downtime live migration",
      "Designed and deployed a secure reverse-proxy architecture "
    ],
    stack: ["Proxmox", "VMs", "Computer networks", "Ceph"],
    featured: false,
    link:"/data-centre",
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Header */}
      
      <section className="mx-auto max-w-9xl px-8 pb-5 pt-10 md:px-15">
        <div className="max-w-4xl">
            <Link
                href="/"
                className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-[#008B8B] transition-transform duration-200 hover:-translate-x-1"
            >
                ← Back to Homepage
            </Link>
          <h1 className="font-serif text-7xl leading-[0.95] tracking-tight md:text-8xl">
            Experience<span className="text-[#008B8B]">.</span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-[#334155]">
            Where I've worked and what I learnt from it.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-8 pb-32 md:px-16">
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:border-[#008B8B] ${
                project.featured
                  ? "rounded-[2rem] p-8 md:p-12"
                  : "rounded-3xl p-7 md:p-10"
              }`}
            >
              {/* Number */}
              <div className="absolute right-8 top-7 font-serif text-5xl text-slate-100 md:right-12 md:top-10 md:text-7xl">
                {project.number}
              </div>

              <div className="relative z-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
                {/* Main */}
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
                      {project.type}
                    </span>

                    <span className="text-slate-300">/</span>

                    <span className="text-sm text-slate-500">
                      {project.date}
                    </span>
                  </div>

                  <h2
                    className={`font-serif tracking-tight ${
                      project.featured
                        ? "text-5xl md:text-7xl"
                        : "text-4xl md:text-5xl"
                    }`}
                  >
                    {project.title}
                  </h2>

                  <p className="mt-2 text-base font-medium text-[#008B8B]">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 max-w-xl text-base leading-7 text-[#475569] md:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-end md:pl-10">
                  <div className="border-l-2 border-[#008B8B] pl-6">
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Highlights
                    </p>

                    <ul className="space-y-4">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-base font-medium text-slate-700"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-10 flex w-fit items-center gap-3 text-sm font-bold text-[#008B8B] transition-transform duration-200 group-hover:translate-x-1"
                    >
                      View project
                      <span className="text-lg">↗</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Teal accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#008B8B] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}