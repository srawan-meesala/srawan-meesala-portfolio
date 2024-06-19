import React from 'react'
import { FaGithub } from "react-icons/fa";

const EachProject = ({project}) => {
    return (
        <>
            <div className="project-container">
                <div className='project-content'>
                    <div className="project-name">
                        {project.name}
                    </div>
                    <div className="project-techstack">
                        <ul>
                            {project.techstack.map((item, key)=>
                                <li key={key}>{item}</li>
                            )}
                        </ul>
                    </div>
                    <div className="project-description">
                        <ul>
                            {project.description.map((item, key)=>
                                <li key={key}>{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="project-repo">
                    <a href={project.github}><FaGithub /></a>
                </div>
            </div>
        </>
    )
}

export default EachProject