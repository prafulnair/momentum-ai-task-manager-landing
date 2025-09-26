"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  // Initialize engine with slim bundle (lighter, faster)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const options = useMemo<ISourceOptions>(() => {
    // dial density down further if user prefers reduced motion
    const count = reduced ? 25 : 200;

    return {
      fpsLimit: 60,
      detectRetina: true,
      background: { color: "transparent" },
      fullScreen: { enable: false }, // we control sizing with CSS
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          resize: { enable: true },
        },
      },
      particles: {
        number: { value: count, density: { enable: true, area: 900 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.16, random: false, animation: { enable: false } },
        size: { value: { min: 2.5, max: 4.8 }, animation: { enable: false } },
        links: { enable: false },
        move: {
          enable: true,
          speed: reduced ? 0.2 : 0.9,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
    };
  }, [reduced]);

  if (!ready || reduced) {
    // If reduced motion is on, return null for an ultra-clean static page.
    // (If you prefer *very* minimal motion instead, remove this early return.)
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="pointer-events-none absolute inset-0 -z-10"
    />
  );
}