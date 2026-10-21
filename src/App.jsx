import React, { lazy, Suspense, useEffect, useState } from 'react';
import siteConfig from './data/siteConfig';

const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Links = lazy(() => import('./components/Links'));

const skillGroups = [
  { title: 'Languages', skills: 'Python, JavaScript' },
  { title: 'Frameworks & Libraries', skills: 'FastAPI, Celery, ReactJS, Node.js, Express, Pandas' },
  { title: 'Databases & Messaging', skills: 'MySQL, OracleDB, MongoDB, DuckDB, Redis, Kafka' },
  { title: 'Tools & Practices', skills: 'Git, OOP Design Patterns, REST APIs, Unit Testing, Docker, AWS (EC2, Lambda), ETL Design' },
];

function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#151c18' : '#f2f4ef'
    );
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <header className="border-b border-line">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#home" className="font-display text-lg font-bold text-ink no-underline" aria-label="Srawan Meesala home">
            SM<span className="text-coral">.</span>
          </a>
          <nav aria-label="Main navigation" className="flex items-center gap-3 text-xs md:gap-8 md:text-sm">
            <a className="text-muted no-underline transition-colors hover:text-ink" href="#experience">Experience</a>
            <a className="text-muted no-underline transition-colors hover:text-ink" href="#work">Work</a>
            <a className="text-muted no-underline transition-colors hover:text-ink" href="#skills">Skills</a>
            <a className="text-muted no-underline transition-colors hover:text-ink" href="#contact">Contact</a>
            <button
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-pressed={theme === 'dark'}
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-forest hover:text-forest"
            >
              {theme === 'dark' ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto grid min-h-[680px] w-full max-w-6xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.45fr_0.55fr] lg:gap-20 lg:py-28">
          <div>
            <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase text-forest">
              <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
              Backend / Data Engineering
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.03] md:text-7xl lg:text-8xl">
              Srawan Meesala
            </h1>
            <p className="mt-4 font-display text-2xl font-medium text-forest md:text-3xl">Backend Software Engineer</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
              I build and operate distributed backend services and data pipelines for enterprise-scale systems.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#experience" className="inline-flex min-h-12 items-center justify-center bg-action px-5 text-sm font-semibold text-white no-underline transition-colors hover:bg-action-hover">
                View experience <span className="ml-3" aria-hidden="true">↓</span>
              </a>
              <a href="#work" className="inline-flex min-h-12 items-center justify-center border border-line px-5 text-sm font-semibold text-ink no-underline transition-colors hover:border-ink">
                Selected work
              </a>
              {siteConfig.resumeUrl ? (
                <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer" className="px-2 py-3 text-sm font-semibold text-forest underline decoration-line underline-offset-4 hover:decoration-forest">
                  Resume
                </a>
              ) : null}
            </div>
          </div>

          <aside aria-label="Selected impact" className="border-l-2 border-coral pl-6 md:pl-8">
            <p className="mb-7 font-mono text-xs uppercase text-muted">Selected impact</p>
            <div className="space-y-7">
              <div>
                <p className="font-display text-4xl font-semibold text-ink">~6h <span className="text-coral">→</span> 10m</p>
                <p className="mt-1 text-sm text-muted">XIRR rebuild runtime</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-ink">~30,000</p>
                <p className="mt-1 text-sm text-muted">monthly reports processed</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-ink">~79%</p>
                <p className="mt-1 text-sm text-muted">estimated infrastructure cost reduction</p>
              </div>
            </div>
          </aside>
        </section>

        <section id="profile" aria-labelledby="profile-heading" className="border-y border-line bg-surface">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-12 md:grid-cols-[220px_1fr] md:gap-12 md:px-8 md:py-16">
            <div>
              <p className="mb-3 font-mono text-xs uppercase text-forest">Professional summary</p>
              <h2 id="profile-heading" className="font-display text-2xl font-semibold md:text-3xl">Systems built for scale.</h2>
            </div>
            <p className="max-w-3xl text-base leading-7 text-muted md:text-lg md:leading-8">
              Backend Software Engineer with production experience designing and operating distributed backend services and data pipelines at enterprise scale. Applies OOP design patterns (Factory, Strategy) to build maintainable, testable, containerized systems — including consolidating a 150-tenant service into a single deployment (infrastructure costs cut an estimated 79%) and cutting a day-long XIRR rebuild to 10 minutes. Owns features end-to-end, from design through testing, deployment, and live-system monitoring, with a track record of driving iterative performance improvements, including a 97% cut in report generation time.
            </p>
          </div>
        </section>

        <section aria-labelledby="education-heading" className="border-y border-line bg-surface">
          <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-8 md:grid-cols-[180px_1fr_auto] md:items-center md:px-8">
            <p id="education-heading" className="font-mono text-xs uppercase text-muted">Education</p>
            <div>
              <h2 className="font-display text-lg font-semibold">Indian Institute of Information Technology, Sri City</h2>
              <p className="mt-1 text-sm text-muted">B.Tech. in Computer Science and Engineering</p>
            </div>
            <p className="font-mono text-xs text-muted">2021 — 2025</p>
          </div>
        </section>

        <Suspense fallback={<div className="px-5 py-16 text-center text-sm text-muted">Loading portfolio…</div>}>
          <Experience />
          <Projects />
          <section id="skills" className="border-t border-line bg-surface">
            <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
              <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-3 font-mono text-xs uppercase text-forest">Toolkit</p>
                  <h2 className="font-display text-4xl font-semibold md:text-6xl">Skills & tools</h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-muted">A practical stack for building, operating, and improving backend services and data pipelines.</p>
              </div>
              <dl className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
                {skillGroups.map((group, index) => (
                  <div key={group.title} className={`grid gap-3 border-b border-line py-6 md:grid-cols-[42px_1fr] ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8 sm:border-l'}`}>
                    <dt className="font-mono text-xs text-coral">0{index + 1}</dt>
                    <div>
                      <dt className="text-sm font-semibold text-ink">{group.title}</dt>
                      <dd className="mt-2 text-sm leading-6 text-muted">{group.skills}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </section>
          <Links />
        </Suspense>
      </main>
    </div>
  );
}

export default App;