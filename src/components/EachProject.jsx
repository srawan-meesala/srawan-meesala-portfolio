import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub } from "react-icons/fa";

const EachProject = ({ project }) => {
    return (
        <article className="w-full h-full cursor-pointer no-underline group flex flex-col justify-between text-white" aria-labelledby={`project-${project.id}-title`}>
            <div className='flex flex-col flex-grow'>
                <h3 id={`project-${project.id}-title`} className="font-inter text-2xl md:text-[28px] pb-3 md:pb-4 text-blue-100 group-hover:text-[#A5C9CA] transition-colors duration-300">
                    {project.name}
                </h3>
                <div className="pb-4 w-full">
                    <ul className="flex flex-wrap w-full items-center justify-start gap-2 max-w-3xl">
                        {project.techstack.map((item, index) =>
                            <li key={`${project.id}-tech-${index}`} className="px-3 py-1.5 bg-black/80 rounded-md text-gray-200 font-inter text-xs md:text-sm tracking-wide border border-gray-800">
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
                <div className="pt-2 md:pt-4 flex w-full justify-start text-gray-300 font-inter flex-grow">
                    <ul className="flex flex-col w-full list-disc pl-5 gap-2 md:gap-3">
                        {project.description.map((item, index) =>
                            <li key={`${project.id}-desc-${index}`} className="py-1 font-inter text-sm md:text-base leading-relaxed text-gray-300">
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="w-full flex justify-end items-center mt-6 md:mt-8 pt-4 border-t border-gray-800/50">
                {project.github ? (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-[24px] bg-[#E7F6F2] text-black rounded-full p-[8px] opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 shadow-md"
                        aria-label={`GitHub repo for ${project.name}`}
                    >
                        <FaGithub className="block" />
                    </a>
                ) : null}
            </div>
        </article>
    )
}

EachProject.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        techstack: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string
    }).isRequired
}

export default EachProject