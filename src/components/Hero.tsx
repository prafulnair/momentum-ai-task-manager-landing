"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-black text-white px-6"
    >
      {/* Headline */}
      <h1 className="text-4xl sm:text-6xl font-bold max-w-3xl leading-tight">
        Manage Tasks <span className="text-blue-400">Smarter</span>,  
        Automate <span className="text-green-400">Faster</span>,  
        Focus on What Matters
      </h1>

      {/* Sub-headline */}
      <p className="mt-6 max-w-2xl text-gray-300 text-lg sm:text-xl">
        Our AI Task Manager organizes, prioritizes, and automates your workflow —
        so you spend less time managing tasks and more time doing them.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex space-x-4">
        <Link
          href="#features"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium"
        >
          Explore Features
        </Link>
        <Link
          href="#setup"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium"
        >
          Quick Setup
        </Link>
      </div>

      {/* Screenshot / Graphic */}
      <div className="mt-12">
        <Image
          src="/hero-screenshot.png"
          alt="AI Task Manager preview"
          width={800}
          height={450}
          className="rounded-xl shadow-lg border border-gray-700"
        />
      </div>
    </section>
  );
}