import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faShop, faUser } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


const navbar = () => (
    <div className="nav-bar">
        <Link className="Logo" to="/">
            <img src={logo} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="shop-link" to="/shop" >
                <FontAwesomeIcon icon={faShop}  color="#4d4d4d" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
            </NavLink>
        </nav>
        <ul>
            <li> 
                <a target="_blank" rel="noreferrer" href='https://www.instagram.com/tega.airports'>
                <FontAwesomeIcon icon={faInstagram} color="#EAEEF3" />
                </a>
            </li>
            <li> 
                <a target="blank" rel="noreferrer" href='https://www.youtube.com/channel/UCPzJLKAW6-hhUl4Znl3Co4Q'>
                <FontAwesomeIcon icon={faYoutube} color="#EAEEF3" />
                </a>
            </li>
        </ul>

        </div>
)


export default navbar
