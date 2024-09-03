import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
        <p id="contacts">
                    Email: 
            <Link className="contact-link" reloadDocument to="mailto:streif.dominic@gmail.com"> 
                    streif.dominic@gmail.com 
            </Link>
                    LinkedIn: 
            <Link className="contact-link" reloadDocument to="https://www.linkedin.com/in/dominic-streif/"> 
                    dominic-streif 
            </Link>
        </p>

        <p className="credits"> 
                    Made with
            <Link className="credits-link" reloadDocument to="https://vitejs.dev/"> 
                    Vite
            </Link>
                    +
            <Link className="credits-link" reloadDocument to="https://react.dev/"> 
                    React
            </Link>
             
        </p>
        </footer>
    )
}

export default Footer;
