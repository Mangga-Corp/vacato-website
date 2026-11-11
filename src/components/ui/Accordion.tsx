import { ChevronDown } from 'lucide-react'

export interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: readonly AccordionItem[]
}

function AccordionCard({ item }: { item: AccordionItem }) {
  return (
    <details className="group rounded-lg border border-border bg-bg px-5 shadow-sm transition-colors open:border-accent/40 open:bg-bg-subtle">
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-body font-medium marker:hidden [&::-webkit-details-marker]:hidden">
        <span>{item.question}</span>
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent">
          <ChevronDown
            aria-hidden="true"
            strokeWidth={1.5}
            className="size-4 transition-transform duration-250 ease-soft group-open:rotate-180"
          />
        </span>
      </summary>
      <p className="pb-5 text-body text-text-muted">{item.answer}</p>
    </details>
  )
}

/** Accessible accordion on native <details>/<summary>: one card per item, stacked. */
export function Accordion({ items }: AccordionProps) {
  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {items.map((item) => (
        <AccordionCard key={item.question} item={item} />
      ))}
    </div>
  )
}
