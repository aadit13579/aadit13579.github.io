"use client";

import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "VEDA",
    subtitle: "Visual Engine for Document Accessibility",
    type: "Research / Systems",
    date: "Jan 2026 – Apr 2026",
    description:
      "A high-concurrency accessibility pipeline for complex academic PDFs, combining asynchronous OCR, document layout analysis, and multimodal reasoning.",
    highlights: [
      "7–10s Time-to-First-Audio",
      "94% reading-order accuracy",
      "0.2–0.4s OCR latency per region",
      "Technical Research Paper accepted for presentation in IEEE TEMSMET2026",
    ],
    stack: ["Python", "asyncio", "Redis", "YOLO", "Tesseract", "LVLM"],
    featured: true,
    link:"https://github.com/aadit13579/VEDA",
  },
  {
    number: "02",
    title: "High Availibility Data Center Leveraging Bare Metal Hardware",
    type: "Research / Systems",
    date: "Jul 2025 – Jul 2026",
    description:
      "Designed and deployed a fault-tolerant bare-metal infrastructure using Proxmox VE, Ceph distributed storage, VLAN segmentation, and automated VM recovery along with reverse proxy access from scratch",
    highlights: [
      "30-second VM recovery time",
      "Architected and deployed a scalable environment ",
      "Engineered a distributed Ceph storage backbone for HA",
      "Integrating isolated network routing via Raspberry Pi-based bridging for controlled external access to internal systems"
    ],
    stack: ["Proxmox", "VMs", "Computer networks", "Ceph"],
    featured: false,
    link:"/data-centre",
  },
  {
    number: "03",
    title: "LLM Observatory Node",
    subtitle: "Distributed LLM Observability",
    type: "Systems / Backend",
    date: "Jul 2026 – Present",
    description:
      "A distributed observability platform for monitoring LLM inference through real-time latency, throughput, token usage, and system health metrics and analyzing model behaviour based on prompt length, temprature and other similar metrics",
    highlights: [
      "Real-time inference metrics",
      "Asynchronous workers",
      "Modular metric aggregation",
    ],
    stack: ["FastAPI", "Redis", "Grafana", "Python", "Async"],
    featured: false
  },
  {
    number: "04",
    title: "ISL Translation",
    subtitle: "Real-Time Indian Sign Language Translation",
    type: "Research / Computer Vision",
    date: "Jan 2025 – Jul 2025",
    description:
      "A real-time gesture recognition system designed for Indian Sign Language translation on resource-constrained hardware.",
    highlights: [
      "49 gesture classes",
      "4,700+ images",
      "87.6% mAP@0.5 · ~32 FPS",
      "Technical Research Paper published in IEEE xplore"
    ],
    stack: ["YOLOv11", "Python", "Computer Vision", "Edge Inference"],
    featured: false,
    link:"/ISL",
  },
  {
    number: "05",
    title: "Persistent AVL Benchmarks",
    type: "Functional Programming / Systems",
    date: "Sept 2026 - Present",
    description:
      "An OCaml study comparing persistent and imperative AVL trees, focusing on structural sharing, memory usage, allocations, and operation latency.",
    highlights: [
      "Persistent vs. imperative AVL implementations",
      "Structural sharing and memory behavior",
      "Benchmarking allocations and operation latency",
    ],
    stack: ["Ocaml", "Data Structures", "Functional Programming", "Benchmarking"],
    featured: false,
    link:"https://github.com/aadit13579/persistent-avl-benchmarks",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Header */}
      <section className="mx-auto max-w-9xl px-8 pb-5 pt-15 md:px-15">
        <div className="max-w-4xl">
          <h1 className="font-serif text-7xl leading-[0.95] tracking-tight md:text-8xl">
            Projects<span className="text-[#008B8B]">.</span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-[#334155]">
            A collection of systems I’ve built, researched, and brought from ideas to working software.
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