"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        setShow(y > 550); // show after hero/first fold
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-40 px-4 transition ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <div className="mx-auto max-w-3xl rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 p-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-white/90">
            Ready when you are. Set up in minutes.
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="#setup"
              className="rounded-lg bg-white text-black text-sm font-medium px-3.5 py-2 hover:bg-gray-100 transition"
            >
              Open Setup
            </Link>
            <Link
              href="https://github.com/your-username/ai-task-manager"
              className="rounded-lg bg-white/5 ring-1 ring-white/15 text-sm text-white px-3.5 py-2 hover:bg-white/10 transition"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}