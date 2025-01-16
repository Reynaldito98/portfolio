import './About.css';
import reynaldo from '../../images/reynaldo.jpeg';

function About() {
    return (
        <main className="about">
            <div className="about__background-image">

            </div>

            <div className="about__right-column">
                <h1 className="about__title">About me</h1>
                <p className="about__text">Multilingual Full Stack Software Engineer who recently graduated from Tripleten Software Engineering bootcamp, specialized in the development of software, with experience in both frontend (using React, Javascript, CSS, HTML) and backend (using NodeJS, Python, MySQL, MongoDB). Graduated of Architecture and Urbanism who holds the professional title of Architect from the Universidad de Oriente in Cuba. I also worked as a junior architect in the United States for a year(2023-2024)</p>

                <p className="about__text"><strong>Technical Skills: </strong>HTML5, CSS3, JavaScript, Python, SQL, React JS, Node.js, MySQL, MongoDB, Git/Github.</p>

                <p className="about__text"><strong>Experience: </strong></p>
                <p className="about__text">I currently work as a Freelance Web Developer. I have designed and developed 5+ responsive websites using JavaScript and React, improving user experience and site interactions. Also, I have researched and implemented best practices, enhancing overall site design and functionality for clients</p>
                <p className="about__text">1/2023 - 9/2024 | I worked as a Junior Architect for Guillermo Aragon Architecture Firm. There, I collaborated with a team of 8 architects on the remodeling of 10+ existing residential properties. Digitally represented architectural plans using AutoCAD and Revit, streamlining communication and project management. Led a team of 3 in measuring and documenting property details, ensuring accurate data for digital modeling.</p>
                <p className="about__text">10/2019 - 12/2022 | I worked as an English teacher and translator for Rafael Maria de Mendive High School. I prepared and instructed over 200 high school students for English proficiency exams, resulting in a 90% pass rate. Translated documents and provided interpretation services during 20+ events and activities, facilitating effective communication</p>

                <p><strong>Education: </strong></p>
                <p>Python Specialization at University of Michigan through Coursera  2025</p>
                <p>Software Engineering Training Program at Tripleten  2024-Completed</p>
                <p>Universidad de Oriente / Architecture and Urbanism  2022-Completed</p>
            </div>
        </main>
    )
}

export default About;