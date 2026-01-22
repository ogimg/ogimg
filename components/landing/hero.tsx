'use client'

import { ArrowRight, Github } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BlurText from '@/components/ui/react-bits/blur-text'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
export default function HeroSection() {
  return (
    <section className="relative z-10 w-full border-b border-dashed border-black/10 dark:border-white/10">
      <div className="container mx-auto p-2 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 26,
              delay: 0.1,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="https://github.com/ogimg/ogimg"
              target="_blank"
              rel="noreferrer"
              className="bg-background group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md transition-colors duration-300 hover:bg-muted dark:border-t-white/5 dark:hover:border-t-border"
            >
              <span className="text-foreground text-sm font-medium">
                The OG image generator
              </span>
              <span className="hidden h-4 w-0.5 border-l bg-back dark:border-background dark:bg-zinc-700 md:block" />
              <span className="bg-muted group-hover:bg-background flex size-6 items-center justify-center overflow-hidden rounded-full transition-colors duration-300">
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </motion.div>

          <div className="mx-auto max-w-2xl">
            <BlurText
              text="Create excellent Open Graph Images"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-foreground mb-4 text-balance text-5xl font-bold tracking-tight md:text-7xl justify-center"
            />
            <TextGenerateEffect
              words="Build captivating, brand-consistent social preview images with our developer-centric, intuitive editor."
              className="text-muted-foreground mx-auto max-w-2xl text-pretty leading-relaxed md:text-lg"
              duration={0.5}
            />
          </div>

          <div className="flex flex-row items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{
                duration: 0.5,
                delay: 2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <Button
                size="lg"
                className="group h-12 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/editor">
                  Start Designing
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.a
              href="https://github.com/ogimg/ogimg"
              target="_blank"
              rel="noreferrer"
              className="h-12 px-8 rounded-full bg-background border font-medium flex items-center gap-2 hover:bg-muted transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{
                duration: 0.5,
                delay: 2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <Github size={18} /> Star on GitHub
            </motion.a>
          </div>

          <motion.div
            className="mx-auto mt-12 max-w-6xl"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.8,
              delay: 2.5,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <Image
              src="/ogimg-editor.png"
              alt="OG Image Editor Preview"
              className="rounded-xl border shadow-2xl dark:border-zinc-800"
              width={3276}
              height={4095}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
