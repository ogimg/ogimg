import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { SOCIAL_LINKS } from '@/constants/site'

const questions = [
  {
    id: 'item-1',
    title: 'What is ogimg?',
    content:
      'ogimg is a completely free and open-source tool for creating beautiful Open Graph images. It helps developers, creators, and marketers build stunning social media previews without any design skills.',
  },
  {
    id: 'item-2',
    title: 'Is ogimg really free?',
    content:
      'Yes! ogimg is 100% free and open source. There are no paid tiers, subscriptions, or hidden costs. You get full access to all features, templates, and export options completely for free.',
  },
  {
    id: 'item-3',
    title: 'Do I need to sign up?',
    content:
      'No account is required. You can start designing and exporting your images instantly without signing up or providing any personal information.',
  },
  {
    id: 'item-4',
    title: 'Who can benefit from ogimg?',
    content:
      'ogimg is built for developers, content creators, and marketers who want to create professional OG images without design skills.',
  },
  {
    id: 'item-5',
    title: 'Can I use the images commercially?',
    content:
      'Absolutely. All images you create with ogimg are yours to use for personal or commercial projects. No attribution is required.',
  },
  {
    id: 'item-6',
    title: 'Can I customize templates in ogimg?',
    content:
      'Yes. ogimg offers fully customizable templates so you can tailor images to match your brand and style.',
  },
  {
    id: 'item-7',
    title: 'Is the project open source?',
    content:
      'Yes, ogimg is open source! You can view the source code, contribute features, or report issues on our GitHub repository. We welcome community contributions.',
  },
  {
    id: 'item-8',
    title: 'How do I get started?',
    content:
      "Simply click the 'Open Editor' button to jump right in. Choose a template or start from scratch, customize your design, and export your og image in seconds.",
  },
]

export default function FAQSection() {
  return (
    <section className="border-b border-dashed border-black/10 dark:border-white/10">
      <div className="mx-auto w-full max-w-3xl space-y-7 px-6 py-16 md:py-24">
        <div className="space-y-2 text-center">
          <h2 className="font-bold text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Here are some common questions about ogimg. If you don't find the
            answer you're looking for, feel free to reach out.
          </p>
        </div>
        <Accordion
          className="-space-y-px w-full rounded-lg border border-dashed border-black/10 dark:border-white/10 bg-card/50"
          collapsible
          defaultValue="item-1"
          type="single"
        >
          {questions.map((item) => (
            <AccordionItem
              className="relative border-x border-dashed border-black/20 dark:border-white/10 first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
              key={item.id}
              value={item.id}
            >
              <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="text-muted-foreground text-center">
          Can't find what you're looking for? Raise issue on{' '}
          <Link
            className="text-foreground underline underline-offset-4"
            href={SOCIAL_LINKS.githubIssues}
          >
            GitHub
          </Link>
        </p>
      </div>
    </section>
  )
}
