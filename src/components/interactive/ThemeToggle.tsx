import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    );
  }, []);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  function toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle('dark', nextTheme === 'dark');
    root.classList.toggle('light', nextTheme === 'light');
    root.dataset.theme = nextTheme;
    try {
      localStorage.setItem('lycohana-theme', nextTheme);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`切換到${nextTheme === 'dark' ? '深色' : '淺色'}主題`}
      aria-pressed={theme === 'dark'}
      onClick={toggleTheme}
    >
      <svg
        className="theme-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M20.5 14.5A8.7 8.7 0 0 1 9.5 3.5a8.7 8.7 0 1 0 11 11Z" />
      </svg>
      <svg
        className="theme-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    </button>
  );
}
