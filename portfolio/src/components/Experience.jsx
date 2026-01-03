import './Experience.css'
import experience from '../data/experience'

function Experience(){
    return(
        <section id="experience">
            <div>
                <h1 className='Expheading'>Experience</h1>
            </div>
            <div className='Expmain'>
                <ul className='Explist'>
                    {
                        experience.map((experience)=>(
                            <li key={experience.id}>
                                <div>
                                    <h1>
                                        {experience.label}
                                    </h1>
                                    <h2>
                                        {experience.jd}
                                    </h2>
                                    <p>
                                        {experience.description}
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Experience