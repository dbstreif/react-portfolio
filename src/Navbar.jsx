import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar () {
    return (
        <nav className="navbar">
            <Link className="home" to="/react-portfolio/">
                Home 
            </Link>
            <Link className="projects" to="/react-portfolio/projects">
                Projects
            </Link>
            <Link className="resume" to="/react-portfolio/resume">
                Resume
            </Link>
        </nav>
    )
}

export default Navbar;
