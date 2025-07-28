'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-zinc-950 border-b border-zinc-700 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300">
          Open-UI
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/components"
            className="hover:text-gray-300"
          >
            Components
          </Link>
        </div>
      </div>
    </nav>
  )
}
