'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ThemeToggle } from '@/components/theme/theme-toggle'

function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-2xl">
        <div
          className="mx-auto flex items-center justify-between
     backdrop-blur-xl
      border border-white/20 dark:border-white/10
       rounded-2xl px-6 py-1
      shadow-2xl shadow-black/10 dark:shadow-black/50"
        >
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <Image
              src="/logo.svg"
              alt="ogimg Logo"
              className="invert dark:invert-0"
              width={50}
              height={50}
            />
            <span className="text-xl -ml-4 font-medium">ogimg</span>
          </Link>

          {/* Right: Actions */}
          <div className="flex items-center gap-1">
            <ThemeToggle />

            <Link
              href="/editor"
              className="ml-2 flex items-center gap-2 px-5 py-2
            bg-black text-white dark:bg-white dark:text-black rounded-full
            text-xs font-bold hover:opacity-90 transition-opacity"
            >
              Open Editor <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
