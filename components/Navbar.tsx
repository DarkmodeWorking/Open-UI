'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white px-6 py-4 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300">
          MyApp
        </Link>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <Link
            href="/components"
            className="hover:text-gray-600 dark:hover:text-gray-300"
          >
            Components
          </Link>

        </div>
      </div>
    </nav>
  )
}
