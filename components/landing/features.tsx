import type { LucideIcon } from 'lucide-react'
import { Github, Settings2, Zap } from 'lucide-react'
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
    title: 'Instant Preview',
    description:
      'Visualize changes instantly. Create and export your perfect image in real-time.',
  },
  {
    id: 'customizable',
    icon: Settings2,
    title: 'Fully Customizable',
    description:
      'Use templates or build from scratch. Customize every detail to match your brand.',
  },
  {
    id: 'open-source',
    icon: Github,
    title: '100% Free & Open Source',
    description:
      'Completely free with no hidden fees. Open source and yours to use forever.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 border-b border-dashed border-black/10 dark:border-white/10">
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
