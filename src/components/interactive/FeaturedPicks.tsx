import { pickTypes } from '../../data/picks';

export default function FeaturedPicks() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pickTypes.map((type) => (
        <article
          key={type.label}
          className="border-t border-[var(--color-border)] py-5 transition hover:border-[var(--color-border-strong)]"
        >
          <h3 className="text-lg font-bold leading-7 text-[var(--color-text)]">
            {type.label}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
            {type.description}
          </p>
        </article>
      ))}
    </div>
  );
}
