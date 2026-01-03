import './Projects.css'
import projects from '../data/projects'
function Projects(){
    return(
        <section className="projects" id="projects">
            <div className="projects-heading">
                <h1 className="projects-title">
                    Projects
                </h1>
            </div>
            <div className='projects-body'>
                <ul className='projects-list'>
                    {
                        projects.map((project)=>(
                            <li key={project.id}>
                                <div>
                                    <h1>
                                        {project.label}
                                    </h1>
                                    <p>
                                        {project.description}
                                    </p>
                                    <a href={project.link}>
                                        GitHub Repository
                                    </a>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
export default Projects