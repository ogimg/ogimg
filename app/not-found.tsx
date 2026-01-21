import { ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black relative">
      <div className="text-center px-4 max-w-2xl">
        {/* 404 */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-black dark:text-white mb-2">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/editor" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Editor
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
