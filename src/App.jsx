import './App.css';
import { ReactTyped } from "react-typed";
import Navbar from "./Navbar";
import Footer from "./Footer";
import calpoly_sweater from "./assets/background2.jpg";

function App() {
  return (
    <>
        <Navbar />

        <div id="parent">

            <h1>
                <ReactTyped strings={["Hi, I&apos;m Dominic"]} typeSpeed={100}
                    backSpeed={50} backDelay={3000} loop />
            </h1>

            <img src={calpoly_sweater} className="intro_img" alt="Dominic Streif" />

            <div id="intro-box">

                    <p>
                        Hey there! I'm Dominic Streif, a dedicated software
                        developer studying computer science at California
                        Polytechnic State University in San Luis Obispo. I love
                        learning and exploring new things within my field and am
                        always ready to integrate whatever knowledge I have. Take a
                        stroll through my website. I'm continuously expanding my
                        projects portfolio, and you'll often find me diving into
                        something new. 
                    </p>
            </div>

        </div>

        <Footer />
    </>
  )
}

export default App
