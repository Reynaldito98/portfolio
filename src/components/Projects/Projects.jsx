import './Projects.css';
import aroundtheUs from '../../images/aroundtheus.png';
import whattowear from '../../images/whattowear.png';
import newsapp from '../../images/newsapp.png';
import baseballapp from '../../images/baseball.jpeg';
import expense from '../../images/expense.jpg';
import Project from '../Project/Project';

const projectList = [
    {
        imageSrc: expense, 
        title: 'Expense Tracker',
        link: 'https://expense-tracker-app-azure-eta.vercel.app',
        github: 'https://github.com/Reynaldito98/expense_tracker_app',
        technologies: 'HTML5, CSS3, JavaScript, React.js',
        description: 'App where you can keep track of your expenses and your income.'
    },
    {
        imageSrc: aroundtheUs, 
        title: 'Around the US',
        link: 'https://reynaldito98.github.io/se_project_aroundtheus/',
        github: 'https://github.com/Reynaldito98/se_project_aroundtheus',
        technologies: 'HTML5, CSS3, JavaScript, Object Oriented Programming',
        description: 'You can upload pictures of your favorite places or cities in US you have visited as well as like them or dislike them and delete them. Great app for a person in need of an album to store memorable pictures. '
    },
    {
        imageSrc: whattowear, 
        link: 'https://what-to-wear-frontend-six.vercel.app/',
        title: 'What to Wear',
        github: 'https://github.com/Reynaldito98/what_to_wear',
        technologies: 'HTML5, CSS3, JavaScript, React.js, Node.js and Express.js',
        description: 'You can upload cards containing clothes and give them a category depending on the weather in which that piece of clothes will be useful. Then, the card created will be displayed to the user if the current temperature coincides with the category given to the card. '
    },
    {
        imageSrc: newsapp,
        link: 'https://newsapp-frontend-kappa.vercel.app',
        title: 'News App',
        github: 'https://github.com/Reynaldito98/newsapp-frontend',
        technologies: 'HTML5, CSS3, JavaScript, React.js',
        description: 'You can enter a topic and it will display cards containing news related to the topic entered. You can save cards that you consider interesting as well as you can delete them. '
    },
    {
        imageSrc: baseballapp,
        link: 'https://make-your-own-stats-app-front.vercel.app',
        title: 'Make Your Own Stats',
        github: 'https://github.com/Reynaldito98/make-your-own-stats-app',
        technologies: 'HTML5, CSS3, JavaScript, React.js, Node.js and Express.js',
        description: 'App created for those who love stats like myself. You can create your own team, and also add players to that team. Then, you can keep track of the stats of the team yourself. Great choice for school teams who need someone to take their stats. '
    }
].reverse();

function Projects() {
    return (
        <main className="projects">
            <div className="projects__background-image">

            </div>

            <h1 className="projects__title">Completed Applications</h1>

            <ul className="projects__list">
                {
                    projectList.map((project, index) => {
                        return (
                            <Project key={index} project={project}></Project>
                        )
                    })
                }
            </ul>
        </main>
    )
}

export default Projects;