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
                        My name is Dominic Streif, and I am a current student
                        at California Polytechnic State University actively
                        pursuing a B.S. in Computer Science with a
                        concentration in cybersecurity.

                        I have a strong passion for designing software that is
                        robust, scalable, and used for the common good of
                        society. I believe that with my eagerness to learn and
                        strong curiosity as a software developer, I can
                        contribute to the advancement of technology today, and
                        discover new, inventive solutions in this ever evolving
                        field.
                    </p>
            </div>

        </div>

        <Footer />
    </>
  )
}

export default App
