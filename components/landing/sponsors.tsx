'use client'

import { Check, Coffee, Copy, Heart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { SPONSORS_LINKS, UPI_ID } from '@/constants/constant'

interface SponsorItemProps {
  name: string
  desc: string
  className?: string
}

const SponsorItem: React.FC<SponsorItemProps> = ({ name, desc, className }) => (
  <div className={`flex flex-col items-center text-center p-6 ${className}`}>
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted/50 border border-dashed border-black/20 dark:border-white/10 text-muted-foreground text-lg font-semibold">
      L
    </div>
    <h3 className="text-lg font-bold text-foreground mb-2">{name}</h3>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
)

const sponsors = [
  {
    id: 'sponsor-1',
    name: 'Your Company Here',
    desc: 'short description of your company',
  },
  {
    id: 'sponsor-2',
    name: 'Your Company Here',
    desc: 'short description of your company',
  },
]

export default function SponsorsSection() {
  const [copied, setCopied] = useState(false)

  const copyUpiId = async () => {
    await navigator.clipboard.writeText(UPI_ID)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-16 border-y border-dashed border-black/20 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-balance">
          Become Sponsors
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dashed divide-black/20 dark:divide-white/10">
            {sponsors.map((sponsor) => (
              <SponsorItem
                key={sponsor.id}
                name={sponsor.name}
                desc={sponsor.desc}
              />
            ))}
          </div>
        </div>

        {/* Sponsor Buttons */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="gap-2">
              <Link href={SPONSORS_LINKS.github} target="_blank">
                <Heart size={18} className="text-pink-500" />
                GitHub Sponsors
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href={SPONSORS_LINKS.buymeacoffee} target="_blank">
                <Coffee size={18} className="text-yellow-500" />
                Buy Me a Coffee
              </Link>
            </Button>
          </div>

          {/* UPI Copy Button */}
          <button
            type="button"
            onClick={copyUpiId}
            className="flex items-center gap-2 rounded-lg border border-dashed border-black/20 dark:border-white/10 bg-muted/50 px-4 py-2 cursor-pointer hover:bg-muted transition-colors"
          >
            <code className="text-sm font-mono text-foreground">{UPI_ID}</code>
            <span className="h-4 w-4">
              {copied ? (
                <Check size={16} className="text-green-500" />
              ) : (
                <Copy size={16} />
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
