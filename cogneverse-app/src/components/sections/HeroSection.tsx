"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import HeroHeader from "@/components/hero/HeroHeader";
import NewItemsLoading from "@/components/hero/NewItemsLoading";
import WordAnimator from "@/components/ui/word-animator";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
// import { Section } from "@/components/layout/Section";

export function HeroSection() {
  const [blocks, setBlocks] = useState<React.ReactNode[]>([]);

  const activeDivs = useMemo(
    () => ({
      0: new Set([4, 1]),
      2: new Set([3]),
      4: new Set([2, 5, 8]),
      5: new Set([4]),
      6: new Set([0]),
      7: new Set([1]),
      10: new Set([3]),
      12: new Set([7]),
      13: new Set([2, 4]),
      14: new Set([1, 5]),
      15: new Set([3, 6]),
    }),
    []
  );

  useEffect(() => {
    const updateBlocks = () => {
      const { innerWidth, innerHeight } = window;
      const blockSize = innerWidth * 0.06; // Using 6vw
      const amountOfBlocks = Math.ceil(innerHeight / blockSize);

      const newBlocks = Array.from({ length: 17 }, (_, columnIndex) => (
        <div key={columnIndex} className="w-[6vw] h-full">
          {Array.from({ length: amountOfBlocks }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className={cn(
                "h-[6vw] w-full border dark:border-[rgba(255,255,255,0.015)] border-[var(--color-ink)]/5",
                // @ts-ignore
                activeDivs[columnIndex]?.has(rowIndex)
                  ? "dark:bg-[rgba(255,255,255,0.03)] bg-[var(--color-cobalt)]/5"
                  : ""
              )}
              style={{ height: `${blockSize}px` }}
            ></div>
          ))}
        </div>
      ));
      setBlocks(newBlocks);
    };

    updateBlocks();
    window.addEventListener("resize", updateBlocks);

    return () => window.removeEventListener("resize", updateBlocks);
  }, [activeDivs]);

  const words = ["Robots", "AI Models", "Systems", "Future"];

  return (
    <div id="hero" className="p-0 overflow-hidden relative w-full">
      <HeroHeader />
      
      <section className="h-screen overflow-hidden relative pb-20 dark:bg-[var(--color-onyx)] bg-[var(--color-paper)]">
        {/* Radial Background */}
        <div 
          className="absolute inset-0 z-0 h-full w-full dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[radial-gradient(#000000_1px,transparent_1px)] opacity-10"
          style={{ backgroundSize: "16px 16px" }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 top-0 left-0 h-screen w-full items-center px-5 py-24 bg-gradient-to-t dark:from-[var(--color-onyx)] from-[var(--color-paper)] from-0% to-transparent to-60%"></div>

        {/* Decorative SVG */}
        <div className="pointer-events-none absolute inset-0 flex w-screen justify-end [mask-image:radial-gradient(transparent_5%,white)]">
          <svg
            width="1512"
            height="1714"
            viewBox="0 0 1512 1714"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute left-0 top-0 h-auto w-full lg:w-1/2 opacity-20"
          >
            <g clipPath="url(#clip0_143_13)">
              <g filter="url(#filter0_f_143_13)">
                <path
                  d="M1045.18 982.551C1129.83 903.957 204.996 477.237 -235.529 294L-339.645 584.211C59.2367 752.376 960.521 1061.15 1045.18 982.551Z"
                  fill="var(--color-cobalt)"
                  fillOpacity="0.4"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_143_13"
                x="-595.645"
                y="38"
                width="1902.26"
                height="1213.13"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="64"
                  result="effect1_foregroundBlur_143_13"
                ></feGaussianBlur>
              </filter>
              <clipPath id="clip0_143_13">
                <rect width="1512" height="1714" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <article className="grid 2xl:pt-52 2xl:pb-24 py-40 relative z-10 sm:px-0 px-4">
          <NewItemsLoading />
          <h1 className="xl:text-7xl md:text-6xl sm:text-5xl text-3xl text-center font-bold text-[var(--color-oceanic)] dark:text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            <span className="block text-[2.5rem] sm:text-5xl mb-2">Build Autonomous</span>{" "}
            <span className="relative translate-x-0 flex gap-2 justify-center flex-wrap">
              <span className="text-[var(--color-cobalt)] dark:text-[var(--color-nectarine)] mr-2">Intelligent</span>
              <WordAnimator
                words={words}
                duration={3}
                className="italic w-fit pr-3 dark:bg-[var(--color-ink)] bg-white dark:border-[var(--color-paper)]/10 border-[var(--color-ink)]/10 text-[var(--color-oceanic)] dark:text-white"
              />{" "}
            </span>
          </h1>
          
          <p className="mx-auto lg:w-[700px] sm:w-[80%] text-center sm:text-lg text-sm mt-8 text-[var(--color-ink)]/70 dark:text-[var(--color-paper)]/70" style={{ lineHeight: "var(--leading-relaxed)" }}>
            The open innovation ecosystem where engineers, designers, and AI builders collaborate to turn ideas into real-world technology.
            <strong> Design</strong>, <strong>Simulate</strong>, and <strong>Deploy</strong> faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <ShimmerButton
              borderRadius={"100px"}
              className={cn(
                "flex items-center gap-2 w-fit rounded-full text-white border sm:px-6 px-4 py-3 shadow-xl"
              )}
              background={"var(--color-cobalt)"}
              shimmerColor={"var(--color-nectarine)"}
            >
              <a href="/login" className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                Join the Ecosystem
              </a>
            </ShimmerButton>

            <Button className="rounded-full px-8 h-[50px] bg-white text-[var(--color-ink)] border border-[var(--color-ink)]/10 hover:bg-[var(--color-ink)]/5 dark:bg-[var(--color-ink)] dark:text-[var(--color-paper)] dark:border-[var(--color-paper)]/10">
              <a href="/docs" className="flex items-center">
                Explore Docs
                <ChevronsRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Floating People Illustration */}
          <div className="mt-16 flex justify-center w-full animate-float relative z-10 pointer-events-none select-none">
            <Image
              src="/people.svg"
              alt="Cogneverse Community"
              width={1000}
              height={500}
              className="w-full max-w-5xl h-auto opacity-95 drop-shadow-2xl"
              priority
            />
          </div>
        </article>

        <div className="flex h-screen overflow-hidden top-0 left-0 inset-0 z-0 absolute pointer-events-none">
          {blocks}
        </div>
      </section>
    </div>
  );
}
