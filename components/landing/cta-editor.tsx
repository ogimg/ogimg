import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function CTAEditorSection() {
  return (
    <section className="relative overflow-hidden border-b border-dashed border-black/20 dark:border-white/10">
      <div className="container mx-auto px-6 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-dashed border-black/20 dark:border-white/10 p-6 sm:p-12 md:p-16 lg:p-20">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Design stunning OG images in minutes
            </h2>
            <p className="max-w-xl text-pretty text-lg text-muted-foreground">
              No design skills needed. Create professional, brand-consistent og
              images with our intuitive editor.
            </p>
            <Button
              asChild
              size="lg"
              className="group h-10 bg-black text-white dark:bg-white dark:text-black rounded-full
 font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Link href="/editor">
                Open Editor
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
