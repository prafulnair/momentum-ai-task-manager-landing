// "use client";

// import { useMemo, useState } from "react";
// import CommandBox from "@/components/CommandBox";

// /* ---------- icons (inline, no deps) ---------- */
// function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
//       <path
//         fillRule="evenodd"
//         d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.142a1 1 0 0 1-1.429.01L3.29 9.285a1 1 0 1 1 1.42-1.41l3.053 3.075 6.361-6.415a1 1 0 0 1 1.58 .755Z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }
// function NodeIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//       <path d="M12 2 2 7v10l10 5 10-5V7L12 2Zm0 2.3L20 8v8l-8 4-8-4V8l8-3.7Z" />
//       <path d="M13 9h2v6a3 3 0 1 1-6 0h2a1 1 0 1 0 2 0V9Z" />
//     </svg>
//   );
// }
// function GitIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//       <path d="M12.7 2.3a1 1 0 0 0-1.4 0L8.6 5H7a1 1 0 0 0-1 1v1.6l-3 3a1 1 0 0 0 0 1.4l9 9a1 1 0 0 0 1.4 0l9-9a1 1 0 0 0 0-1.4l-9-9ZM9 7h2v2.6l-1.3 1.3A2 2 0 1 0 12 13v6.6L5.4 13l1.9-1.9A2 2 0 0 0 9 9.6V7Zm6 10a2 2 0 0 0-2 2h2a1 1 0 1 0 2 0 2 2 0 0 0-2-2Zm0-4a2 2 0 0 0-2 2h2a1 1 0 1 0 2 0 2 2 0 0 0-2-2Z" />
//     </svg>
//   );
// }
// function KeyIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//       <path d="M14 3a7 7 0 0 0-6.91 8.2l-3.58 3.58a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0L8.5 17H10v1h2v-2h1.5l1.46-1.46A7 7 0 1 0 14 3Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
//     </svg>
//   );
// }

// /* ---------- atoms ---------- */
// function Chip({ children }: { children: React.ReactNode }) {
//   return (
//     <span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 text-sm text-gray-300 px-3 py-1">
//       {children}
//     </span>
//   );
// }

// function Card({
//   icon,
//   title,
//   body,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   body: string;
// }) {
//   return (
//     <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
//       <div className="flex items-center gap-2">
//         <div className="h-6 w-6 text-emerald-300">{icon}</div>
//         <div className="text-[15px] text-white/90 font-medium">{title}</div>
//       </div>
//       <p className="mt-2 text-sm text-gray-400">{body}</p>
//     </div>
//   );
// }

// /* ---------- Setup main ---------- */
// type Mode = "cli" | "local" | "docker";
// type PM = "npm" | "yarn" | "pnpm" | "bun";

// export default function Setup() {
//   const [mode, setMode] = useState<Mode>("cli");
//   const [pm, setPm] = useState<PM>("npm");

//   const commands = useMemo(() => {
//     if (mode === "cli") {
//       const install =
//         pm === "npm"
//           ? "npm install -g ai-task-cli"
//           : pm === "yarn"
//           ? "yarn global add ai-task-cli"
//           : pm === "pnpm"
//           ? "pnpm add -g ai-task-cli"
//           : "bun add -g ai-task-cli";
//       return [
//         { label: "Install CLI", cmd: install },
//         { label: "Initialize project", cmd: "ai-task init" },
//         { label: "Launch", cmd: "ai-task open" },
//       ];
//     }
//     if (mode === "local") {
//       return [
//         { label: "Clone", cmd: "git clone https://github.com/your-username/ai-task-manager.git && cd ai-task-manager" },
//         { label: "Install deps", cmd: pm === "npm" ? "npm install" : pm === "yarn" ? "yarn" : pm === "pnpm" ? "pnpm i" : "bun install" },
//         { label: "Start dev server", cmd: pm === "npm" ? "npm run dev" : pm === "yarn" ? "yarn dev" : pm === "pnpm" ? "pnpm dev" : "bun run dev" },
//       ];
//     }
//     // docker
//     return [
//       { label: "Pull image", cmd: "docker pull ghcr.io/your-username/ai-task-manager:latest" },
//       { label: "Run", cmd: "docker run --rm -p 3000:3000 --env-file .env ai-task-manager:latest" },
//     ];
//   }, [mode, pm]);

//   return (
//     <section
//       id="setup"
//       className="relative max-w-6xl mx-auto px-6 py-24 md:py-28 scroll-mt-24"
//     >
//       {/* soft background accents */}
//       <div className="pointer-events-none absolute -top-20 -left-28 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/15 via-fuchsia-400/10 to-indigo-400/15 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-20 -right-28 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-400/10 via-violet-500/10 to-sky-400/10 blur-3xl" />

//       <div className="max-w-3xl">
//         <Chip>Prerequisites</Chip>
//         <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
//           You’ll be ready in minutes
//         </h2>
//         <p className="mt-3 text-gray-300">
//           A lightweight setup with clean defaults. Bring your keys if you want AI features enabled.
//         </p>
//       </div>

//       {/* prerequisites cards */}
//       <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         <Card
//           icon={<NodeIcon className="h-5 w-5" />}
//           title="Node.js 18+"
//           body="Required to run the local dev server and CLI."
//         />
//         <Card
//           icon={<GitIcon className="h-5 w-5" />}
//           title="Git"
//           body="To clone the repo or use starter templates."
//         />
//         <Card
//           icon={<KeyIcon className="h-5 w-5" />}
//           title="(Optional) AI Key"
//           body="Add your provider key (e.g., OPENAI_API_KEY) to unlock AI features."
//         />
//       </div>

//       {/* quick start */}
//       <div className="mt-12">
//         <div className="inline-flex items-center gap-2 text-sm text-gray-300">
//           <CheckIcon className="h-4 w-4 text-emerald-300" />
//           Quick Start
//         </div>

//         {/* mode tabs */}
//         <div className="mt-3 flex flex-wrap items-center gap-2">
//           {(["cli", "local", "docker"] as Mode[]).map((m) => (
//             <button
//               key={m}
//               onClick={() => setMode(m)}
//               className={`rounded-lg px-3 py-1.5 text-sm transition ring-1 ${
//                 mode === m
//                   ? "bg-white text-black ring-white/10"
//                   : "bg-white/5 text-gray-200 ring-white/10 hover:bg-white/10"
//               }`}
//             >
//               {m === "cli" ? "CLI" : m === "local" ? "Local" : "Docker"}
//             </button>
//           ))}

//           {/* package manager pills */}
//           {mode !== "docker" && (
//             <div className="ml-2 flex flex-wrap gap-1.5">
//               {(["npm", "yarn", "pnpm", "bun"] as PM[]).map((p) => (
//                 <button
//                   key={p}
//                   onClick={() => setPm(p)}
//                   className={`rounded-md px-2.5 py-1 text-xs ring-1 transition ${
//                     pm === p
//                       ? "bg-white text-black ring-white/10"
//                       : "bg-white/5 text-gray-200 ring-white/10 hover:bg-white/10"
//                   }`}
//                   aria-pressed={pm === p}
//                 >
//                   {p}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="mt-4 grid gap-3">
//           {commands.map(({ label, cmd }) => (
//             <CommandBox key={label} label={label} command={cmd} />
//           ))}
//         </div>

//         {/* env hint */}
//         <div className="mt-4 text-xs text-gray-400">
//           Tip: create a <code>.env.local</code> with <code>OPENAI_API_KEY=…</code> (and any other
//           provider keys). Never commit secrets to Git.
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import CommandBox from "@/components/CommandBox";

/* ---------- icons (inline, no deps) ---------- */
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
function NodeIcon(props: React.SVGProps<SVGSVGElement>) {
  // generic cube icon; reused for "Python" prereq card
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2 2 7v10l10 5 10-5V7L12 2Zm0 2.3L20 8v8l-8 4-8-4V8l8-3.7Z" />
      <path d="M13 9h2v6a3 3 0 1 1-6 0h2a1 1 0 1 0 2 0V9Z" />
    </svg>
  );
}
function GitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.7 2.3a1 1 0 0 0-1.4 0L8.6 5H7a1 1 0 0 0-1 1v1.6l-3 3a1 1 0 0 0 0 1.4l9 9a1 1 0 0 0 1.4 0l9-9a1 1 0 0 0 0-1.4l-9-9ZM9 7h2v2.6l-1.3 1.3A2 2 0 1 0 12 13v6.6L5.4 13l1.9-1.9A2 2 0 0 0 9 9.6V7Zm6 10a2 2 0 0 0-2 2h2a1 1 0 1 0 2 0 2 2 0 0 0-2-2Zm0-4a2 2 0 0 0-2 2h2a1 1 0 1 0 2 0 2 2 0 0 0-2-2Z" />
    </svg>
  );
}
function KeyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 3a7 7 0 0 0-6.91 8.2l-3.58 3.58a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0L8.5 17H10v1h2v-2h1.5l1.46-1.46A7 7 0 1 0 14 3Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
    </svg>
  );
}

/* ---------- atoms ---------- */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 text-sm text-gray-300 px-3 py-1">
      {children}
    </span>
  );
}

function Card({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 text-emerald-300">{icon}</div>
        <div className="text-[15px] text-white/90 font-medium">{title}</div>
      </div>
      <p className="mt-2 text-sm text-gray-400">{body}</p>
    </div>
  );
}

/* ---------- Setup main ---------- */
type Mode = "cli" | "local" | "docker"; // keep keys; labels changed below
type PM = "npm" | "yarn" | "pnpm" | "bun";

export default function Setup() {
  const [mode, setMode] = useState<Mode>("cli");
  const [pm, setPm] = useState<PM>("npm");

  const commands = useMemo(() => {
    if (mode === "cli") {
      // Backend API (FastAPI) — local dev
      return [
        {
          label: "Clone",
          cmd: "git clone https://github.com/your-username/AI_ToDo_App.git && cd AI_ToDo_App",
        },
        {
          label: "Create venv",
          cmd: "python -m venv .venv && source .venv/bin/activate",
        },
        { label: "Install deps", cmd: "pip install -r requirements.txt" },
        {
          label: "Set env",
          cmd: 'export GEMINI_API_KEY="<your-gemini-key>" && export LOCAL_TZ="America/Toronto"',
        },
        {
          label: "Optional: embeddings",
          cmd: "pip install sentence-transformers",
        },
        {
          label: "Run API",
          cmd: "uvicorn api:app --reload --port 8000",
        },
      ];
    }
    if (mode === "local") {
      // Marketing site (this Next.js project) — local dev
      return [
        {
          label: "Clone site",
          cmd: "git clone https://github.com/your-username/ai-tasks-site.git && cd ai-tasks-site",
        },
        {
          label: "Install deps",
          cmd:
            pm === "npm"
              ? "npm install"
              : pm === "yarn"
              ? "yarn"
              : pm === "pnpm"
              ? "pnpm i"
              : "bun install",
        },
        {
          label: "Start dev server",
          cmd:
            pm === "npm"
              ? "npm run dev"
              : pm === "yarn"
              ? "yarn dev"
              : pm === "pnpm"
              ? "pnpm dev"
              : "bun run dev",
        },
      ];
    }
    // docker: build & run backend API container locally
    return [
      { label: "Build image", cmd: "docker build -t ai-task-manager ." },
      {
        label: "Run container",
        cmd: "docker run --rm -p 8000:8000 --env-file .env ai-task-manager",
      },
    ];
  }, [mode, pm]);

  return (
    <section
      id="setup"
      className="relative max-w-6xl mx-auto px-6 py-24 md:py-28 scroll-mt-24"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-20 -left-28 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/15 via-fuchsia-400/10 to-indigo-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-28 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-400/10 via-violet-500/10 to-sky-400/10 blur-3xl" />

      <div className="max-w-3xl">
        <Chip>Prerequisites</Chip>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
          You’ll be ready in minutes
        </h2>
        <p className="mt-3 text-gray-300">
          Local FastAPI backend + optional embeddings. A simple Next.js site for the landing page.
        </p>
      </div>

      {/* prerequisites cards */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          icon={<NodeIcon className="h-5 w-5" />}
          title="Python 3.11+"
          body="Required for the FastAPI backend and services."
        />
        <Card
          icon={<GitIcon className="h-5 w-5" />}
          title="Git"
          body="Clone the repos for the backend and the landing site."
        />
        <Card
          icon={<KeyIcon className="h-5 w-5" />}
          title="Gemini API Key (Optional)"
          body='Set GEMINI_API_KEY for AI features. Optional: SentenceTransformers for semantic reconciliation.'
        />
      </div>

      {/* quick start */}
      <div className="mt-12">
        <div className="inline-flex items-center gap-2 text-sm text-gray-300">
          <CheckIcon className="h-4 w-4 text-emerald-300" />
          Quick Start
        </div>

        {/* mode tabs */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {(["cli", "local", "docker"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-lg px-3 py-1.5 text-sm transition ring-1 ${
                mode === m
                  ? "bg-white text-black ring-white/10"
                  : "bg-white/5 text-gray-200 ring-white/10 hover:bg-white/10"
              }`}
            >
              {m === "cli" ? "Backend API" : m === "local" ? "Marketing Site" : "Docker"}
            </button>
          ))}

          {/* package manager pills (for site/backends that use Node) */}
          {mode !== "docker" && (
            <div className="ml-2 flex flex-wrap gap-1.5">
              {(["npm", "yarn", "pnpm", "bun"] as PM[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPm(p)}
                  className={`rounded-md px-2.5 py-1 text-xs ring-1 transition ${
                    pm === p
                      ? "bg-white text-black ring-white/10"
                      : "bg-white/5 text-gray-200 ring-white/10 hover:bg-white/10"
                  }`}
                  aria-pressed={pm === p}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 grid gap-3">
          {commands.map(({ label, cmd }) => (
            <CommandBox key={label} label={label} command={cmd} />
          ))}
        </div>

        {/* env hint */}
        <div className="mt-4 text-xs text-gray-400">
          Backend: create <code>.env</code> with <code>GEMINI_API_KEY=…</code> (and optional <code>SENTENCE_MODEL_NAME</code>, <code>LOCAL_TZ</code>).  
          Site: use <code>.env.local</code> for any <code>NEXT_PUBLIC_*</code> keys.
        </div>
      </div>
    </section>
  );
}