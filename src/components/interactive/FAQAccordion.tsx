import { useState } from 'react';
import { faqItems } from '../../data/faq';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mt-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <section key={item.question}>
            <button
              id={buttonId}
              type="button"
              className="focus-ring flex w-full items-center justify-between gap-4 py-4 text-left text-base font-bold text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <span
                className="shrink-0 text-lg text-[var(--color-accent)]"
                aria-hidden="true"
              >
                {isOpen ? '-' : '+'}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 text-sm leading-7 text-[var(--color-text-muted)]"
            >
              {item.answer}
            </div>
          </section>
        );
      })}
    </div>
  );
}
