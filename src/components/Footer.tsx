import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10">
      {/* soft line glow */}
      <div
        className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-white font-semibold">AI Task Manager</div>
            <p className="text-sm text-gray-400 mt-1">
              Manage tasks faster. Automate smarter.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#features" className="text-sm text-gray-300 hover:text-white">
              Features
            </Link>
            <Link href="#solution" className="text-sm text-gray-300 hover:text-white">
              How it works
            </Link>
            <Link href="#setup" className="text-sm text-gray-300 hover:text-white">
              Setup
            </Link>
            <Link
              href="https://github.com/your-username/ai-task-manager"
              className="text-sm text-gray-300 hover:text-white"
            >
              GitHub
            </Link>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} AI Task Manager. All rights reserved.
        </div>
      </div>
    </footer>
  );
}