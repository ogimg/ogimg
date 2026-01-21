import type { LucideIcon } from 'lucide-react'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import CardDecorator from '@/components/ui/custom/card-decorator'

const features: {
  id: string
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    id: 'preview',
    icon: Zap,
    title: 'Real-time Preview',
    description:
      'See your changes instantly as you design. Export as PNG when ready.',
  },
  {
    id: 'customizable',
    icon: Settings2,
    title: 'Fully Customizable',
    description:
      'Choose from multiple templates. Customize fonts, colors, and layouts to match your brand.',
  },
  {
    id: 'modern',
    icon: Sparkles,
    title: 'Built with Modern Tools',
    description:
      'Powered by Next.js, Tailwind CSS, and Vercel. Open-source and free to use.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 border-b border-dashed border-black/20 dark:border-white/10">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-black dark:text-white text-4xl font-semibold lg:text-5xl">
            Create OG images that stand out
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to create professional Open Graph images that
            drive clicks and engagement.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center *:bg-background md:mt-16">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="group border border-dashed border-black/20 dark:border-white/10 shadow-none"
            >
              <CardHeader className="pb-3">
                <CardDecorator>
                  <feature.icon className="size-6" aria-hidden />
                </CardDecorator>

                <h3 className="mt-6 font-medium">{feature.title}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
