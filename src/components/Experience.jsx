import React from 'react'

const experiences = [
  {
    id: 'kfin-fulltime',
    role: 'Software Engineer',
    company: 'KFin Technologies Ltd.',
    period: 'Jun 2025 — Present',
    bullets: [
      <>Designed and developed the <strong>Client Statement Report</strong> module — multi-level investment reports (family, portfolio, customer) — applying Factory and Strategy design patterns for plug-and-play column/section generation and database-agnostic method dispatch.</>,
      <>Drove a <strong>97%+ reduction</strong> in per-report generation time across three engineering iterations: legacy baseline of 30 min → 2–5 min (improving application level design) → under 1 min (replaced views with flattened queries), owning the Data Service and level-based report generation as the core backbone.</>,
      <>Architected a bulk report generation pipeline for <strong>~30,000 monthly reports</strong> using DuckDB for portfolio-level data precomputation (fetch latency ~100 ms), Celery workers with a Redis-backed queue for parallel execution, and Python multiprocessing — overcoming the GIL constraint that had previously blocked parallelism.</>,
      <>Owned end-to-end delivery of the <strong>Value Research data pipeline</strong> — paginated ingestion with bulk, incremental, and schema sync request types — handling requirements, client communication for API token renewals, development, testing, and deployment on a Windows instance with a scheduled execution setup.</>,
      <>Built the data population pipeline for the <strong>Analytics module</strong> using DuckDB for aggregation-heavy transformations and its native ATTACH feature for DB writes, reducing the monthly maintenance downtime window from <strong>1 hour to 15 minutes</strong>.</>,
    ],
  },
  {
    id: 'kfin-intern',
    role: 'Software Engineer Intern',
    company: 'KFin Technologies Ltd.',
    period: 'Dec 2024 — May 2025',
    bullets: [
      <>Worked on mPower, a large-scale enterprise wealth management and fund accounting platform, focusing on backend debugging, issue resolution, and performance optimisation in complex fund accounting workflows.</>,
      <>Collaborated on a UI modernisation initiative, transforming legacy modules into dynamic, user-centric interfaces.</>,
      <>Strengthened production-readiness through structured logging and debugging, enabling faster issue resolution across large-scale deployments.</>,
    ],
  },
]

const Experience = () => {
  return (
    <div className="min-h-screen h-auto w-full bg-black bg-experience-pattern bg-cover bg-center bg-fixed flex flex-col relative overflow-hidden">
      {/* Section Title */}
      <div className="text-[60px] md:text-[100px] p-8 md:p-[50px] text-[#666] md:text-[#888] w-full z-10">
        Experience.
      </div>

      {/* Experience Cards */}
      <div className="w-full flex flex-col items-center gap-8 md:gap-12 px-4 md:px-[60px] lg:px-[100px] pb-16 md:pb-24 -mt-4 md:-mt-8 z-10">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="w-full max-w-5xl rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-6 md:p-10 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-[#A5C9CA]/[0.04] group"
          >
            {/* Role & Period Header */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 mb-5 md:mb-6">
              <h3 className="font-inter text-xl md:text-2xl text-[#d4d4d4] group-hover:text-[#A5C9CA] transition-colors duration-300 tracking-tight">
                <span className="font-semibold">{exp.role}</span>
                <span className="text-[#888] font-normal">, {exp.company}</span>
              </h3>
              <span className="font-bebas text-lg md:text-xl text-[#666] group-hover:text-[#888] transition-colors duration-300 tracking-widest whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5 md:mb-6" />

            {/* Bullet Points */}
            <ul className="flex flex-col gap-3 md:gap-4 list-none pl-0">
              {exp.bullets.map((bullet, idx) => (
                <li
                  key={`${exp.id}-${idx}`}
                  className="flex items-start gap-3 md:gap-4 font-inter text-sm md:text-[15px] leading-relaxed text-[#999] group-hover:text-[#b0b0b0] transition-colors duration-300"
                >
                  <span className="mt-[7px] min-w-[5px] min-h-[5px] w-[5px] h-[5px] rounded-full bg-[#555] group-hover:bg-[#A5C9CA] transition-colors duration-300 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
