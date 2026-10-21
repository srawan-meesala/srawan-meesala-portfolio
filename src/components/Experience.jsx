import React from 'react'

const experiences = [
  {
    id: 'kfin-fulltime',
    role: 'Software Engineer',
    company: 'KFin Technologies Ltd.',
    period: 'Jun 2025 — Present',
    bullets: [
      <>Engineered a bulk XIRR rebuild service (FastAPI, Celery, Redis, pandas) computing XIRR for all active portfolios at portfolio, asset-class, and folio/security levels, replacing a MySQL window-function view that took <strong>~6 hours</strong> with a <strong>~10 min</strong> run.</>,
      <>Batched the cashflow/holdings query across portfolios and added indexes on multi-million-row tables (<strong>40s → ~2s per task</strong>), pooled DB connections, tracked task success/failure via Redis queues, validated output at multiple levels, and achieved zero-downtime loads via a staging table with an atomic MySQL table swap.</>,
      <>Architected a bulk report generation pipeline for <strong>~30,000 monthly reports</strong> using DuckDB for portfolio-level data precomputation (fetch latency <strong>~100ms</strong>), Celery workers with a Redis-backed queue for parallel execution, and Python multiprocessing — overcoming the GIL constraint that had previously blocked parallelism.</>,
      <>Owned end-to-end delivery of the Value Research data pipeline — paginated ingestion with bulk, incremental, and schema sync request types with fault tolerance — handling requirements, development, testing, and deployment across Windows (EC2) instances by default, with cron-based scheduling on client-managed Linux instances for on-premise deployments.</>,
      <>Moved the pipeline from AWS Lambda to Windows (EC2) to cut costs and limits; prototyped CDC alternatives (AWS DMS, Airbyte, Debezium/Kafka) but shelved them over on-premise constraints and missing upstream primary keys.</>,
      <>Built the data population pipeline for the Analytics module using DuckDB for aggregation-heavy transformations and its native ATTACH feature for DB writes, reducing the monthly maintenance downtime window from <strong>1 hour to 15 minutes</strong>.</>,
      <>Designed and built a multi-tenant FastAPI service consolidating client-onboarding PDF generation for AIF (Alternative Investment Fund) schemes across <strong>~150 AMC tenants</strong> — replacing 150 separately billed, tenant-specific Node.js instances with one Dockerized service driven by the Strategy pattern and tenant-specific config, with pluggable strategies spanning dynamic form-filling (docfly, pikepdf), HTML-to-PDF templating via Playwright, and a configurable ODF builder for dynamic sections and attachments — cutting infrastructural costs by an estimated <strong>79%</strong>.</>,
    ],
  },
  {
    id: 'kfin-intern',
    role: 'Software Engineer Intern',
    company: 'KFin Technologies Ltd.',
    period: 'Dec 2024 — May 2025',
    bullets: [
      <>Worked on mPower, a large-scale enterprise wealth management and fund accounting platform, focusing on backend debugging, issue resolution, and performance optimisation in complex fund accounting workflows.</>,
      <>Designed and developed the Client Statement Report module — multi-level investment reports (family, portfolio, customer) — applying Factory and Strategy design patterns for plug-and-play column/section generation and database-agnostic method dispatch; covered by unit tests.</>,
      <>Drove a <strong>97%+ reduction</strong> in per-report generation time across three engineering iterations: legacy baseline of 30 min → 2–5 min (improving application level design) → under 1 min (replaced views with flattened queries), owning the Data Service and level-based report generation as the core backbone.</>,
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="border-t border-line bg-[#e8ede8]">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-14 grid gap-4 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase text-forest">Career</p>
            <h2 className="font-display text-4xl font-semibold md:text-6xl">Experience</h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-muted md:justify-self-end">Production systems, data pipelines, and performance improvements at enterprise scale.</p>
        </div>

        <div className="border-t border-[#cbd5ce]">
          {experiences.map((experience) => (
            <article key={experience.id} className="grid gap-6 border-b border-[#cbd5ce] py-9 md:grid-cols-[220px_1fr] md:gap-12 md:py-12">
              <header>
                <p className="font-mono text-xs text-muted">{experience.period}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{experience.role}</h3>
                <p className="mt-1 text-sm text-muted">{experience.company}</p>
              </header>
              <ol className="space-y-0">
                {experience.bullets.map((bullet, index) => (
                  <li key={`${experience.id}-${index}`} className="grid gap-3 border-t border-[#d7ded8] py-4 first:border-t-0 first:pt-0 md:grid-cols-[36px_1fr] md:gap-5 md:py-5">
                    <span className="font-mono text-xs text-coral">{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-sm leading-7 text-muted md:text-[15px]">{bullet}</p>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
