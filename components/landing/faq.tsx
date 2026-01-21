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
    title: 'What is OGImg?',
    content:
      'OGImg is a tool for creating beautiful Open Graph images for your website, designed to help developers build stunning social media previews with ease.',
  },
  {
    id: 'item-2',
    title: 'Who can benefit from OGImg?',
    content:
      'OGImg is built for developers, content creators, and marketers who want to create professional OG images without design skills.',
  },
  {
    id: 'item-3',
    title: 'What features does OGImg include?',
    content:
      'OGImg offers an intuitive editor where you can design and customize OG images with templates, custom fonts, gradients, and more. Export your designs in multiple formats.',
  },
  {
    id: 'item-4',
    title: 'Can I customize templates in OGImg?',
    content:
      'Yes. OGImg offers fully customizable templates so you can tailor images to match your brand and style.',
  },
  {
    id: 'item-5',
    title: 'Is OGImg free to use?',
    content:
      'OGImg offers a free tier with essential features. Premium features are available for power users who need more customization options.',
  },
  {
    id: 'item-6',
    title: 'How do I get started with OGImg?',
    content:
      "Simply click the 'Open Editor' button to start creating your OG images. No signup required to try it out.",
  },
]

export default function FAQSection() {
  return (
    <section className="border-b border-dashed border-black/20 dark:border-white/10">
      <div className="mx-auto w-full max-w-3xl space-y-7 px-6 py-16 md:py-24">
        <div className="space-y-2 text-center">
          <h2 className="font-bold text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Here are some common questions about OGImg. If you don't find the
            answer you're looking for, feel free to reach out.
          </p>
        </div>
        <Accordion
          className="-space-y-px w-full rounded-lg border border-dashed border-black/20 dark:border-white/10 bg-card/50"
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
          Can't find what you're looking for? Contact us on{' '}
          <Link
            className="text-foreground hover:underline"
            href={SOCIAL_LINKS.github}
          >
            GitHub
          </Link>
        </p>
      </div>
    </section>
  )
}
