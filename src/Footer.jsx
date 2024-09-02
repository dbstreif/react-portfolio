import './Footer.css'

function Footer() {
    return (
        <footer>
        <p id="email">
                Email: 
        <a href="mailto:streif.dominic@gmail.com"> streif.dominic@gmail.com </a>
                LinkedIn: 
        <a href="https://www.linkedin.com/in/dominic-streif/"> dominic-streif </a>
        </p>
        <p className="credits"> Made with
            <a href="https://vitejs.dev/"> Vite </a>
             + 
            <a href="https://react.dev/"> React </a>
             
        </p>
        </footer>
    )
}

export default Footer;
