import React from 'react'
import EachProject from './EachProject'
import projects from '../data/projects'

const Projects = () => {
  return (
    <>
      <div className="min-h-screen h-auto w-full bg-black bg-card-4-pattern flex flex-col relative">
        <div className="text-[60px] md:text-[100px] p-8 md:p-[50px] text-[#666] md:text-[#888] absolute left-0 w-full z-10">
          Projects.
        </div>
        <div id='wrap' className="flex flex-col items-center min-h-[90%] h-auto mt-[120px] md:mt-[200px] mb-[100px] w-full pt-10">
          <div className="w-full flex flex-col items-center gap-6 md:gap-10">
            {projects.map((project) =>
              <div 
                className="w-[90%] md:w-[80%] max-w-5xl min-h-[300px] md:min-h-[400px] rounded-[12px] bg-p-bg flex items-center justify-center p-6 md:p-10 shadow-lg shadow-black/50 hover:shadow-[#A5C9CA]/20 hover:shadow-xl transition-all duration-300" 
                key={project.id}
              >
                <EachProject project={project} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects