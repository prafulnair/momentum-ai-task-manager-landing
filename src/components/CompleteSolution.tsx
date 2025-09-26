import Link from "next/link";

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 12a1 1 0 0 1 1-1h10.59l-3.3-3.3a1 1 0 1 1 1.42-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.42-1.4l3.3-3.3H5a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

function Card({
  title,
  desc,
  accent = "from-indigo-500/60 via-fuchsia-500/40 to-emerald-400/60",
}: {
  title: string;
  desc: string;
  accent?: string;
}) {
  return (
    <div className="relative">
      <div className={`absolute -inset-3 rounded-3xl bg-gradient-to-br ${accent} blur-2xl`} />
      <div className="relative rounded-2xl p-[1px] bg-white/10">
        <div className="rounded-2xl bg-black/70 ring-1 ring-white/10 p-6">
          <h3 className="text-[15px] font-semibold text-white/90">{title}</h3>
          <p className="mt-2 text-sm text-gray-300">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function CompleteSolution() {
  return (
    <section
      id="solution"
      className="relative max-w-6xl mx-auto px-6 py-24 md:py-28 scroll-mt-24"
    >
      {/* soft backdrop */}
      <div className="pointer-events-none absolute -top-20 -left-28 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-400/10 via-violet-500/10 to-sky-400/10 blur-3xl" />

      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-sm text-gray-300">
          Two-Step Flow
        </div>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
          From messy inputs to a calm, automated system
        </h2>
        <p className="mt-3 text-gray-300">
          Your day, simplified. Capture everything once, automate the routine, and stay in flow.
        </p>
      </div>

      {/* steps */}
      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto_1fr] items-stretch">
        <Card
          title="Step 1 — AI Task Collector"
          desc="Ingests from email/chat/notes, enriches with context, de-dupes, and organizes into clean views (Inbox, Today, Table)."
        />
        <div className="hidden md:flex items-center justify-center">
          <ArrowRightIcon className="h-8 w-8 text-white/50" />
        </div>
        <Card
          title="Step 2 — Task Automations"
          desc="Lightweight rules and one-click actions schedule, assign, notify, and sync—so important work moves forward automatically."
          accent="from-emerald-400/60 via-violet-500/40 to-sky-400/60"
        />
      </div>

      {/* benefits */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
          <div className="text-[15px] font-semibold text-white/90">Save hours</div>
          <p className="mt-1.5 text-sm text-gray-300">
            Less sorting & less context switching. More deep work.
          </p>
        </div>
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
          <div className="text-[15px] font-semibold text-white/90">Stay in flow</div>
          <p className="mt-1.5 text-sm text-gray-300">
            Subtle automations, no brittle pipelines—just helpful nudges.
          </p>
        </div>
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
          <div className="text-[15px] font-semibold text-white/90">Scale your impact</div>
          <p className="mt-1.5 text-sm text-gray-300">
            Handle more projects with the same energy and focus.
          </p>
        </div>
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
          <div className="text-[15px] font-semibold text-white/90">Professional polish</div>
          <p className="mt-1.5 text-sm text-gray-300">
            Clear status, clean handoffs, and timely updates—automatically.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="#setup"
          className="rounded-xl bg-white text-black font-medium px-4 py-2.5 hover:bg-gray-100 transition"
        >
          Get started
        </Link>
        <Link
          href="https://github.com/your-username/ai-task-manager"
          className="rounded-xl bg-white/5 ring-1 ring-white/10 text-white px-4 py-2.5 hover:bg-white/10 transition"
        >
          View on GitHub
        </Link>
      </div>
    </section>
  );
}