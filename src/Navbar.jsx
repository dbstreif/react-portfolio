import './Navbar.css'

function Navbar () {
    return (
        <nav className="navbar">
            <a className="home" href="/">
                Home
            </a>
            <a className="projects" href="/projects">
                Projects
            </a>
            <a className="resume" href="/resume">
                Resume
            </a>
        </nav>
    )
}

export default Navbar;
