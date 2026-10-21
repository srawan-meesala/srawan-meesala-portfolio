import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'

const EachProject = ({ project, index }) => (
    <article className={`grid gap-10 border-b border-line py-9 md:gap-16 md:py-12 ${project.impact ? 'md:grid-cols-[1fr_280px]' : 'md:grid-cols-1'}`} aria-labelledby={`project-${project.id}-title`}>
        <div>
            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase text-muted">
                <span>{String(index + 1).padStart(2, '0')} / Case study</span>
                {project.date ? <><span className="text-coral" aria-hidden="true">·</span><span>{project.date}</span></> : null}
            </div>
            <h3 id={`project-${project.id}-title`} className="max-w-3xl font-display text-3xl font-semibold leading-tight md:text-4xl">
                {project.name}
            </h3>
            <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-forest">
                {project.techstack.map((technology) => (
                    <li key={`${project.id}-${technology}`} className="after:ml-3 after:text-coral after:content-['/'] last:after:content-none">
                        {technology}
                    </li>
                ))}
            </ul>
            <ul className="mt-8 space-y-5">
                {project.description.map((description, descriptionIndex) => (
                            <li key={`${project.id}-description-${descriptionIndex}`} className="grid gap-3 md:grid-cols-[28px_1fr] md:gap-4">
                                <span className="font-mono text-xs text-coral">0{descriptionIndex + 1}</span>
                        <p className="text-sm leading-7 text-muted md:text-[15px]">{description}</p>
                    </li>
                ))}
            </ul>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-forest hover:decoration-forest">
                <FaGithub aria-hidden="true" /> View source
            </a>
        </div>

        {project.impact ? (
            <figure className="self-start bg-forest p-6 text-white md:mt-8">
            <figcaption className="font-mono text-[10px] uppercase text-white/70">{project.impact.label}</figcaption>
            <div className="mt-8 space-y-6">
                <div>
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                        <span className="text-xs text-white/75">{project.impact.beforeLabel}</span>
                        <span className="font-display text-xl font-semibold">{project.impact.before}</span>
                    </div>
                    <div className="h-2 bg-white/20">
                        <div className="h-full w-full bg-[#e9b09a]" />
                    </div>
                </div>
                <div>
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                        <span className="text-xs text-white/75">{project.impact.afterLabel}</span>
                        <span className="font-display text-xl font-semibold">{project.impact.after}</span>
                    </div>
                    <div className="h-2 bg-white/20">
                        <div className="h-full w-[12%] bg-white" />
                    </div>
                </div>
            </div>
            <p className="mt-8 border-t border-white/20 pt-4 font-mono text-xs text-white/80">{project.impact.result}</p>
            </figure>
        ) : null}
    </article>
)

EachProject.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string,
        techstack: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string,
        impact: PropTypes.shape({
            label: PropTypes.string.isRequired,
            beforeLabel: PropTypes.string.isRequired,
            before: PropTypes.string.isRequired,
            afterLabel: PropTypes.string.isRequired,
            after: PropTypes.string.isRequired,
            result: PropTypes.string.isRequired,
        }),
    }).isRequired,
    index: PropTypes.number.isRequired,
}

export default EachProject