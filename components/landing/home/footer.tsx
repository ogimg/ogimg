import { Github } from 'lucide-react'
import Image from 'next/image'
import { RiTwitterXLine } from 'react-icons/ri'

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/ogimg/ogimg',
    icon: <Github size={20} />,
    ariaLabel: 'ogimg on GitHub',
  },
  {
    label: 'Twitter/X',
    href: 'https://x.com/ogimg_art',
    icon: <RiTwitterXLine size={20} />,
    ariaLabel: 'ogimg on Twitter',
  },
]

function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-dashed border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
            {/* Brand + Description */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <Image
                      src="/logo.svg"
                      alt="ogimg Logo"
                      className="invert dark:invert-0"
                      width={32}
                      height={32}
                      priority
                    />
                  </span>
                  <span className="select-none text-xl font-extrabold leading-tight tracking-tight text-black dark:text-zinc-50">
                    ogimg
                  </span>
                </div>

                <p className="max-w-md text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Open-source Open Graph image generator.
                  <br />
                  Built for creators, developers, and everyone.
                </p>
              </div>

              <nav
                aria-label="Social links"
                className="flex items-center gap-3 md:pt-1 md:justify-end"
              >
                {SOCIALS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={link.ariaLabel}
                  >
                    {link.icon}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 dark:border-white/10 pt-8 text-xs text-zinc-500 dark:text-zinc-400 sm:flex-row">
              {/* Copyright */}
              <div className="flex items-center gap-2 sm:gap-1">
                <span>
                  © {new Date().getFullYear()}{' '}
                  <a
                    href="https://ogimg.art"
                    className="text-text-main transition-colors hover:text-blue-500 hover:underline underline-offset-2"
                  >
                    OG Img
                  </a>
                  . All rights reserved.
                </span>
              </div>

              {/* Author Credit */}
              <div className="flex items-center gap-2">
                <span>Made by</span>
                <a
                  href="https://megh.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-medium text-text-main transition-colors hover:underline"
                  aria-label="Megh's website"
                >
                  <span>Megh</span>
                </a>
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
