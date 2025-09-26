"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-white">
          AI Task Manager
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          <Link href="#features" className="text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="#setup" className="text-gray-300 hover:text-white">
            Setup
          </Link>
        </div>
      </div>
    </nav>
  );
}