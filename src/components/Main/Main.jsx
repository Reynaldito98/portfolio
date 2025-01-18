import './Main.css';
import rey from '../../images/rey.jpeg';
import { Link } from 'react-router';

function Main() {
    return (
        <main className="main">
            <div className="main__background-image">

            </div>

            <img src={rey} className="main__picture"></img>

            <div className="main__right-column">
                <h1 className="main__heading">Portfolio</h1>
                <h1 className="main__heading">Reynaldo Perez Pauli</h1>
                <p className="main__info"><strong><a href="https://www.linkedin.com/in/reynaldo-perez-pauli/" target="_blank">Linkedin</a></strong> | <strong><a href="https://github.com/Reynaldito98" target="_blank">GitHub</a></strong></p>
                <p className="main__info main__info_title"><strong>Full Stack Software Engineer</strong></p>
                <p className="main__info"><strong>City:</strong> Olathe, Kansas</p>
                <p className="main__info"><strong>Email:</strong> reynaldoperezpauli6@gmail.com</p>
                <p className="main__info main__info_padding"><strong>Phone:</strong> +1 (786) 794-8944</p>

                <Link className="main__button" to="/projects">Projects</Link>
            </div>
        </main>
    )
}

export default Main;