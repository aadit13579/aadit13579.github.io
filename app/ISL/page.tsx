
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ISL translation system using YOLO",
  description:
    "Translating gestures into text in real time.",
};
export default function ISLPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">

      {/* Project Header */}
    <section className="mx-auto max-w-7xl px-8 pb-12 pt-16 md:px-16 md:pt-20">
    <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#008B8B] transition-transform duration-200 hover:-translate-x-1"
    >
        ← Back to Projects
    </Link>

    <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">

        {/* Text */}
        <div>
        <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
            Research / Computer Vision
            </span>

            <span className="text-slate-300">/</span>

            <span className="text-sm text-slate-500">
            Jan 2025 – Jul 2025
            </span>
        </div>

        <h1 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
            ISL Translation System
            <span className="text-[#008B8B]">.</span>
        </h1>

        <p className="mt-5 text-xl font-medium text-[#008B8B] md:text-2xl">
            Real-Time Indian Sign Language Translation
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#475569]">
            A real-time gesture recognition system designed to translate
            Indian Sign Language gestures into text while operating on
            resource-constrained hardware.<br></br>
            <a
              href="https://doi.org/10.1109/ICDICI66477.2025.11135273"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#008B8B] transition-transform duration-200 hover:translate-x-1"
            >
              View publication
              <span className="text-lg">↗</span>
            </a>
        </p>
        </div>

        {/* Project Image */}
        <div className="relative">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <Image
            src="/isl2.png"
            alt="Indian Sign Language translation system"
            width={900}
            height={550}
            className="h-auto w-full object-cover"
            />
        </div>
        </div>

    </div>
    </section>


      {/* Overview */}
      <section className="mx-auto max-w-7xl px-8 py-16 md:px-16 md:py-20">

        <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
              01 / Overview
            </p>
          </div>    
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Translating gestures into text in real time.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#475569]">
              The project explores real-time Indian Sign Language recognition
              using computer vision and object detection. The system identifies
              individual gestures from a live camera feed and maps them to their
              corresponding textual representation.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#475569]">
              A dataset of more than 4,700 manually curated and augmented
              images was developed across 49 gesture classes. A YOLO-based
              detection pipeline was then trained and optimized for real-time
              inference.
            </p>
          </div>

        </div>
      </section>


      {/* Metrics */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          <div className="border-b border-slate-200 p-8 md:border-b-0 md:border-r">
            <p className="font-serif text-5xl md:text-6xl">49</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
              Gesture Classes
            </p>
          </div>

          <div className="border-b border-slate-200 p-8 md:border-b-0 md:border-r">
            <p className="font-serif text-5xl md:text-6xl">4,700+</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
              Images
            </p>
          </div>

          <div className="border-b border-slate-200 p-8 md:border-b-0 md:border-r">
            <p className="font-serif text-5xl md:text-6xl">87.6%</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
              mAP@0.5
            </p>
          </div>

          <div className="p-8">
            <p className="font-serif text-5xl md:text-6xl">~32</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-slate-500">
              FPS
            </p>
          </div>

        </div>
      </section>


      {/* Approach */}
      <section className="mx-auto max-w-7xl px-8 py-16 md:px-16 md:py-20">

        <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
              02 / Approach
            </p>
          </div>

          <div>

            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              From camera input to translated output.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <span className="font-serif text-3xl text-[#008B8B]">
                  01
                </span>

                <h3 className="mt-6 text-lg font-bold">
                  Data Collection
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Curated and augmented a dataset of 4,700+ images covering
                  49 gesture classes.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <span className="font-serif text-3xl text-[#008B8B]">
                  02
                </span>

                <h3 className="mt-6 text-lg font-bold">
                  Gesture Detection
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Trained a YOLOv11 model to detect and classify gestures
                  from live camera input.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <span className="font-serif text-3xl text-[#008B8B]">
                  03
                </span>

                <h3 className="mt-6 text-lg font-bold">
                  Text Output
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Mapped detected gesture classes to their corresponding
                  textual representation.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>




      {/* Implementation */}
      <section className="mx-auto max-w-7xl px-8 py-16 md:px-16 md:py-20">

        <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
              03 / Implementation
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">

            <div>
              <h3 className="font-serif text-3xl">
                Model
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                YOLOv11 was used for real-time hand gesture detection across
                49 gesture classes.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Dataset
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                More than 4,700 manually curated and augmented images were
                used for training and evaluation.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Inference
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                The inference pipeline was optimized for real-time operation
                on edge and consumer hardware.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl">
                Performance
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                The model achieved 87.6% mAP@0.5 while maintaining
                approximately 32 FPS during inference.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Tech Stack */}
      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-8 py-16 md:px-16">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
            Technology
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Python",
              "YOLOv11",
              "Computer Vision",
              "OpenCV",
              "Edge Inference",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* Research */}
      <section className="mx-auto max-w-7xl px-8 py-16 md:px-16 md:py-20">

        <div className="grid gap-12 md:grid-cols-[0.8fr_2fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008B8B]">
              04 / Research
            </p>
          </div>

          <div className="max-w-3xl">

            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              From implementation to research.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              The work was developed into a technical research paper titled
              <span className="font-medium text-slate-800">
                {" "}“Breaking Barriers: Sign Language Translation into Text”
              </span>
              {" "}and published through IEEE ICDICI 2025.
            </p>

            <a
              href="https://doi.org/10.1109/ICDICI66477.2025.11135273"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#008B8B] transition-transform duration-200 hover:translate-x-1"
            >
              View publication
              <span className="text-lg">↗</span>
            </a>

          </div>

        </div>

      </section>


      {/* Footer */}
      <section className="border-t border-slate-200">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-12 md:px-16">

          <Link
            href="/projects"
            className="text-sm font-bold text-[#008B8B] transition-transform duration-200 hover:-translate-x-1"
          >
            ← Back to Projects
          </Link>

          <span className="font-serif text-2xl">
            ISL<span className="text-[#008B8B]">.</span>
          </span>

        </div>

      </section>

    </main>
  );
}