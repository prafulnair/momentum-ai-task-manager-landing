"use client";

import { useCallback, useState } from "react";

export default function CommandBox({
  command,
  label,
}: {
  command: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(command);
      } else {
        // Fallback
        const ta = document.createElement("textarea");
        ta.value = command;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // ignore
    }
  }, [command]);

  return (
    <div className="group relative rounded-xl bg-white/5 ring-1 ring-white/10 p-3 md:p-4">
      {label ? (
        <div className="mb-2 text-xs text-gray-400">{label}</div>
      ) : null}
      <div className="flex items-center justify-between gap-3">
        <code className="block text-[13px] md:text-sm text-gray-200 overflow-x-auto whitespace-pre">
          {command}
        </code>
        <button
          onClick={copy}
          aria-label="Copy command"
          className="shrink-0 rounded-lg bg-white/5 ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-gray-200 hover:bg-white/10 transition"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div
        className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />
    </div>
  );
}