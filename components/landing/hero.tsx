import { ArrowRight, Github } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
    return (
        <section className="relative z-10">
            <div className="container py-20">
                <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
                    <Link
                        href="#link"
                        className="bg-background group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md transition-colors duration-300 hover:bg-muted dark:border-t-white/5 dark:hover:border-t-border"
                    >
                        <span className="text-foreground text-sm font-medium">
                            The OG image generator
                        </span>
                        <span className="hidden h-4 w-0.5 border-l bg-white dark:border-background dark:bg-zinc-700 md:block" />
                        <span className="bg-background group-hover:bg-muted flex size-6 items-center justify-center overflow-hidden rounded-full transition-colors duration-500">
                            <ArrowRight className="size-4" />
                        </span>
                    </Link>

                    <div className="mx-auto max-w-3xl">
                        <h1 className="text-foreground mb-4 text-balance text-5xl font-medium tracking-tight md:text-7xl">
                            Create excellent Open Graph Images
                        </h1>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-pretty leading-relaxed md:text-lg">
                            Build captivating, brand-consistent social preview images with our developer-centric, intuitive editor.
                        </p>
                    </div>

                    <div className="flex flex-row items-center gap-4">
                        <Button
                            size="lg"
                            className="h-12 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            asChild
                        >
                            <Link href="/editor">
                                Start Designing

                                <ArrowRight className="size-4" />

                            </Link>
                        </Button>

                        <a
                            href="https://github.com/ogimg/ogimg"
                            target="_blank"
                            rel="noreferrer"
                            className="h-12 px-8 rounded-full bg-background backdrop-blur-md border font-medium flex items-center gap-2 hover:bg-muted transition-all"
                        >
                            <Github size={18} /> Star on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}