import './Project.css';
import aroundtheUs from '../../images/aroundtheus.png';

function Project({project}) {
    return (
        <li className="project">
            <img src={project.imageSrc} className="project__image"></img>
            
            <div className="project__right-column">
                <h2 className="project__heading">{project.title}</h2>
                <div className="project__container">
                    <a href='/' className="project__site-link">Website</a>
                    <a href={project.github} className="project__site-link">Repository</a>
                </div>
                <p className="project__info"><strong>Technologies Used: </strong>{project.technologies}</p>
                <p className="project__info"><strong>Description: </strong>{project.description}</p>
            </div>
        </li>
    )
}

export default Project;