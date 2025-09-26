// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative flex flex-col items-center justify-center text-center min-h-screen bg-black text-white px-6"
//     >
//       {/* Headline */}
//       <h1 className="text-4xl sm:text-6xl font-bold max-w-3xl leading-tight">
//         Manage Tasks <span className="text-blue-400">Smarter</span>,  
//         Automate <span className="text-green-400">Faster</span>,  
//         Focus on What Matters
//       </h1>

//       {/* Sub-headline */}
//       <p className="mt-6 max-w-2xl text-gray-300 text-lg sm:text-xl">
//         Our AI Task Manager organizes, prioritizes, and automates your workflow —
//         so you spend less time managing tasks and more time doing them.
//       </p>

//       {/* CTA Buttons */}
//       <div className="mt-8 flex space-x-4">
//         <Link
//           href="#features"
//           className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium"
//         >
//           Explore Features
//         </Link>
//         <Link
//           href="#setup"
//           className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium"
//         >
//           Quick Setup
//         </Link>
//       </div>

//       {/* Screenshot / Graphic */}
//       <div className="mt-12">
//         <Image
//           src="/hero-screenshot.png"
//           alt="AI Task Manager preview"
//           width={800}
//           height={450}
//           className="rounded-xl shadow-lg border border-gray-700"
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 text-sm text-gray-300 px-3 py-1">
      {children}
    </span>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.142a1 1 0 0 1-1.429.01L3.29 9.285a1 1 0 1 1 1.42-1.41l3.053 3.075 6.361-6.415a1 1 0 0 1 1.58 .755Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AppMock() {
  // subtle, self-contained mock “app window” with a fake task list
  return (
    <div className="relative">
      {/* outer glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-emerald-400/20 blur-2xl rounded-[2rem]" />
      {/* frame */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/60 via-fuchsia-500/40 to-emerald-400/60">
        <div className="rounded-2xl bg-black">
          {/* window header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <div className="ml-3 text-[13px] text-gray-400">ai-task-manager.local</div>
          </div>
          {/* content */}
          <div className="p-5">
            <div className="text-sm text-gray-400 mb-3">Today</div>
            <ul className="space-y-3">
              {[
                { title: "Summarize meeting notes", tag: "AI Assist", done: true },
                { title: "Draft email to vendor", tag: "Automation", done: false },
                { title: "Prioritize sprint backlog", tag: "Insights", done: false },
                { title: "Create follow-up tasks from chat", tag: "Collector", done: true },
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className={`mt-1 h-5 w-5 rounded-md flex items-center justify-center ${
                      t.done ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <CheckIcon className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] text-white/90">{t.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">#{t.tag}</div>
                  </div>
                  <div
                    className={`text-xs px-2 py-0.5 rounded-md ring-1 ${
                      t.done
                        ? "bg-emerald-400/10 ring-emerald-400/30 text-emerald-300"
                        : "bg-white/5 ring-white/10 text-gray-300"
                    }`}
                  >
                    {t.done ? "Done" : "Pending"}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {["Quick Add", "Summarize", "Auto-Assign"].map((label) => (
                <button
                  key={label}
                  className="rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition text-sm text-gray-200 py-2"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft radial background behind hero copy */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-emerald-400/10 via-violet-500/10 to-sky-400/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-sm text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AI-Powered Task Manager
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-white">
              Manage tasks faster.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-emerald-300">
                Automate smarter.
              </span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-300">
              Let AI collect, prioritize, and automate your workflow. Focus on the work that
              matters—your assistant handles the rest.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="#setup"
                className="rounded-xl bg-white text-black font-medium px-4 py-2.5 hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/prafulnair/AI_ToDo_App"
                className="rounded-xl bg-white/5 ring-1 ring-white/10 text-white px-4 py-2.5 hover:bg-white/10 transition"
              >
                View on GitHub
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Chip>Task Collector</Chip>
              <Chip>AI Automations</Chip>
              <Chip>Insights</Chip>
            </div>
          </div>

          {/* right: mock app */}
          <div className="md:pl-6">
            <AppMock />
          </div>
        </div>
      </div>
    </section>
  );
}