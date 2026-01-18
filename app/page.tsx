'use client'

import LandingPage from '@/components/pages/landing'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white font-sans dark:bg-black">
      {/* landing page compoment */}
      <LandingPage />
      <main className="flex flex-col items-center justify-center w-full h-full px-4 py-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Cooking something cool
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            an open-source Open Graph image generator.
          </p>
        </div>
      </main>
    </div>
  )
}
