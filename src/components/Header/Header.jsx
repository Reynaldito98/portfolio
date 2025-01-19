import './Header.css';
import {Link, useLocation} from 'react-router-dom';
import logo from '../../images/logo.jpeg';

function Header() {
    const location = useLocation();

    return (
        <header className='header'>
            <img src={logo} className='header__image'/>

            <div className='header__right-column'>
                <Link to='/' className={`header__link ${location.pathname==='/'?'header__link_active':''}`}>Home</Link>
                <Link to='/about' className={`header__link ${location.pathname==='/about'?'header__link_active':''}`}>About</Link>
                <Link to='/projects' className={`header__link ${location.pathname==='/projects'?'header__link_active':''}`}>Projects</Link>
            </div>
        </header>
    )
}

export default Header;