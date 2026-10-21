import React from 'react'
import EachProject from './EachProject'
import projects from '../data/projects'

const Projects = () => {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12">
          <div>
            <p className="mb-3 font-mono text-xs uppercase text-forest">Selected work</p>
            <h2 id="work-heading" className="font-display text-4xl font-semibold md:text-6xl">A closer look</h2>
          </div>
        </div>
        <div className="border-t border-line">
          {projects.map((project, index) => (
            <EachProject project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects