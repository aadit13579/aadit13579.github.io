import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
  <main className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
    <Navbar />

    {/* Hero */}
    <div
      className="
        max-w-7xl mx-auto
        px-6 md:px-16
        min-h-screen
        relative z-10
        flex flex-col md:flex-row
        items-center
        justify-center
        pt-20 md:pt-0
      "
    >
      {/* Text content */}
      <div
        className="
          w-full md:w-1/2
          space-y-6
          text-left
          pb-4 md:pb-0
          z-20
        "
      >
        <p className="text-[#008B8B] font-bold uppercase tracking-widest text-xs md:text-sm">
          Systems Engineer & Researcher
        </p>

        <h1
          className="
            text-5xl
            md:text-7xl
            font-extrabold
            text-slate-900
            leading-tight
            font-serif
          "
        >
          Hello, I'm
          <br />
          Aadit Lele
        </h1>

        <p
          className="
            text-slate-600
            max-w-md
            text-base md:text-lg
            leading-relaxed
          "
        >
          I like building the systems behind software, from scalable
          backends and distributed infrastructure to high-concurrency
          pipelines and efficient AI applications.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button asAnchor href="/projects" variant="solid">
            Projects
          </Button>

          <Button
            asAnchor
            href="https://linkedin.com/in/aadit-lele"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            asAnchor
            href="/experience"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Experience
          </Button>
        </div>
      </div>

      {/* VISUAL FRAME */}
      <div
        className="
          w-full md:w-1/2
          relative
          flex
          justify-center md:justify-end
          z-10
          mt-[-10px] md:mt-0
          h-[430px] md:h-[600px]
        "
      >
        {/* Blob */}
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="
            absolute
            pointer-events-none
            text-[#008B8B]
            fill-current

            /* MOBILE */
            w-[135%]
            h-[125%]
            top-[-55%]
            right-[-52%]
            rotate-12

            /* DESKTOP */
            md:w-[150%]
            md:h-[145%]
            md:top-[-20%]
            md:right-[-32%]
          "
        >
          <path
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.9,-18,97.1,-2.4C97.3,13.2,91.7,28.9,81.8,41.9C71.9,54.9,57.7,65.2,42.2,71.6C26.7,78,9.9,80.5,-6,82.4C-21.9,84.3,-36.9,85.6,-50.2,79.5C-63.5,73.4,-75,59.9,-82.9,44.5C-90.8,29.1,-95.1,11.8,-94.1,-5.1C-93.1,-22,-86.8,-38.5,-76.2,-51.7C-65.6,-64.9,-50.7,-74.8,-35.6,-80.5C-20.5,-86.2,-5.1,-87.7,9.9,-84.9C24.9,-82.1,30.5,-83.6,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Portrait */}
        <div
          className="
            absolute
            z-10

            /* MOBILE */
            w-[420px]
            h-[490px]
            top-[-230px]
            left-[78%]
            -translate-x-1/2

            /* LAPTOP */
            md:relative
            md:top-auto
            md:left-auto
            md:translate-x-0
            md:w-[600px]
            md:h-[650px]
          "
        >
          <Image
            src="/thisimage.png"
            alt="Aadit Amit Lele"
            fill
            className="
              object-contain
              object-bottom

              scale-150

              md:scale-200

              drop-shadow-2xl
            "
            priority
          />
        </div>
      </div>
    </div>
  </main>
);
}