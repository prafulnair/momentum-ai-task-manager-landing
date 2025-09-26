"use client";

import Link from "next/link";
import React from "react";

/* ---------- Small UI atoms ---------- */

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

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11 2l1.8 4.9L18 8l-5.2 2.1L11 15l-1.8-4.9L4 8l5.2-1.1L11 2zM20 11l1 2.7L24 15l-3 1.3L20 19l-1-2.7L16 15l3-1.3L20 11zM4 14l.9 2.4L8 17l-3.1 1.3L4 21l-.9-2.7L0 17l3.1-1.3L4 14z" />
    </svg>
  );
}

function InboxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3 4h18a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2h-4.5a2.5 2.5 0 0 1-2.45-2H10.95a2.5 2.5 0 0 1-2.45 2H4a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1Zm1 2v9a1 1 0 0 0 1 1h4.5a1.5 1.5 0 0 0 1.5-1.5V14h2v.5A1.5 1.5 0 0 0 14.5 16H19a1 1 0 0 0 1-1V6H4Z" />
    </svg>
  );
}

function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7 2h2v2h6V2h2v2h2a1 1 0 0 1 1 1v15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1h2V2Zm12 6H5v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Z" />
    </svg>
  );
}

/* ---------- Feature bullet ---------- */

function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 h-6 w-6 rounded-md bg-white/5 ring-1 ring-white/10 text-gray-200 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-[15px] text-white/90">{title}</div>
        <p className="text-sm text-gray-400 mt-0.5">{desc}</p>
      </div>
    </li>
  );
}

/* ---------- Perfect-for card ---------- */

function PerfectForCard({ items }: { items: string[] }) {
  return (
    <div className="relative">
      <div className="absolute -inset-3 bg-gradient-to-br from-emerald-400/15 via-fuchsia-400/10 to-indigo-400/15 blur-2xl rounded-2xl" />
      <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
        <div className="inline-flex items-center gap-2 text-sm text-gray-300">
          <SparklesIcon className="h-3.5 w-3.5 text-emerald-300" />
          Perfect for
        </div>
        <ul className="mt-3 space-y-2">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-2 text-gray-200">
              <CheckIcon className="h-4 w-4 text-emerald-300" />
              <span className="text-sm">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Section block ---------- */

function SectionBlock({
  label,
  heading,
  copy,
  features,
  perfectFor,
  reverse = false,
}: {
  label: string;
  heading: React.ReactNode;
  copy: string;
  features: { icon: React.ReactNode; title: string; desc: string }[];
  perfectFor: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid items-start gap-10 md:gap-14 ${
        reverse ? "md:grid-cols-[1.1fr_0.9fr]" : "md:grid-cols-[0.9fr_1.1fr]"
      }`}
    >
      {/* Text column */}
      <div className={reverse ? "md:order-2" : ""}>
        <Chip>{label}</Chip>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">{heading}</h2>
        <p className="mt-3 text-gray-300">{copy}</p>

        <ul className="mt-6 space-y-4">
          {features.map((f) => (
            <FeatureItem key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3">
          <Link
            href="#setup"
            className="rounded-xl bg-white text-black font-medium px-4 py-2.5 hover:bg-gray-100 transition"
          >
            See Setup
          </Link>
          <Link
            href="#"
            className="rounded-xl bg-white/5 ring-1 ring-white/10 text-white px-4 py-2.5 hover:bg-white/10 transition"
            aria-disabled
            onClick={(e) => e.preventDefault()}
            title="Demo coming soon"
          >
            Live Demo
          </Link>
        </div>
      </div>

      {/* Perfect-for column */}
      <div className={reverse ? "md:order-1" : ""}>
        <PerfectForCard items={perfectFor} />
      </div>
    </div>
  );
}

/* ---------- Main Features section ---------- */

export default function Features() {
  return (
    <section id="features" className="relative max-w-6xl mx-auto px-6 py-24 md:py-28">
      {/* soft background accents */}
      <div className="pointer-events-none absolute -top-16 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-400/10 via-violet-500/10 to-sky-400/10 blur-3xl" />

      {/* Block A: AI Task Collector */}
      <SectionBlock
        label="AI Task Collector"
        heading={
          <>
            Smart capture & organization{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-emerald-300">
              without the busywork
            </span>
          </>
        }
        copy="Stop copy-pasting todos across tools. The Collector ingests from email, chat, and notes, deduplicates, and groups tasks with context so your inbox becomes a clean, actionable queue."
        features={[
          {
            icon: <InboxIcon className="h-3.5 w-3.5" />,
            title: "Multi-source capture",
            desc: "Pull tasks from Email, Slack/Teams, Notes/Notion, and file uploads.",
          },
          {
            icon: <SparklesIcon className="h-3.5 w-3.5" />,
            title: "AI parsing & enrichment",
            desc: "Extracts titles, owners, dates, links, and attachments. Adds labels automatically.",
          },
          {
            icon: <CheckIcon className="h-3.5 w-3.5" />,
            title: "De-dupe & merge",
            desc: "Detects duplicates and merges related items to keep a single source of truth.",
          },
          {
            icon: <CalendarIcon className="h-3.5 w-3.5" />,
            title: "Priority & views",
            desc: "Inbox, Today, and Table views with quick filters for projects and urgency.",
          },
        ]}
        perfectFor={[
          "Busy professionals juggling multiple streams",
          "Founders who live in email & chat",
          "Students managing classes and side projects",
          "Solo devs needing a clean capture inbox",
        ]}
      />

      {/* Divider */}
      <div className="my-16 border-t border-white/10" />

      {/* Block B: Task Automations */}
      <SectionBlock
        reverse
        label="Task Automations"
        heading={
          <>
            Automate the routine{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-sky-300 to-indigo-300">
              and stay in flow
            </span>
          </>
        }
        copy="Design light automations that actually help: quick rules and one-click actions to schedule, assign, notify, and update systems so important tasks move forward on their own."
        features={[
          {
            icon: <BoltIcon className="h-3.5 w-3.5" />,
            title: "One-click actions",
            desc: "Generate summaries, draft emails, or create subtasks directly from any task.",
          },
          {
            icon: <CalendarIcon className="h-3.5 w-3.5" />,
            title: "Smart scheduling",
            desc: "Auto-slot tasks into your day based on duration windows and meeting gaps.",
          },
          {
            icon: <SparklesIcon className="h-3.5 w-3.5" />,
            title: "Rules & triggers",
            desc: "When label = Client, auto-assign; when due < 24h, escalate; when complete, notify.",
          },
          {
            icon: <CheckIcon className="h-3.5 w-3.5" />,
            title: "Status & sync",
            desc: "Keep statuses aligned across tools with minimal setup — no brittle pipelines.",
          },
        ]}
        perfectFor={[
          "ICs who want fewer manual steps",
          "Team leads who need predictable follow-through",
          "Anyone who hates context switching",
          "People who love clean, simple rules",
        ]}
      />
    </section>
  );
}