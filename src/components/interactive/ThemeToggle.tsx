import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const storageKey = 'lycohana-theme';

function getCurrentTheme(): Theme {
  if (typeof document === 'undefined') {
    return 'light';
  }

  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  root.dataset.theme = theme;
  localStorage.setItem(storageKey, theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3 text-sm font-bold text-[var(--color-text)] shadow-sm transition hover:border-[var(--color-border-strong)]"
      aria-label={`切換到${nextTheme === 'dark' ? '深色' : '白色'}主題`}
      aria-pressed={theme === 'dark'}
      onClick={() => {
        applyTheme(nextTheme);
        setTheme(nextTheme);
      }}
    >
      <span
        className="grid size-6 place-items-center rounded-full bg-[var(--color-accent-soft)] text-[11px] text-[var(--color-accent)]"
        aria-hidden="true"
      >
        {theme === 'dark' ? '夜' : '白'}
      </span>
      <span className="hidden sm:inline">
        {theme === 'dark' ? '深色' : '白色'}
      </span>
    </button>
  );
}
