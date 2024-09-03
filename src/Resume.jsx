import './Resume.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import resume_pdf from "./assets/resume.pdf"

function Resume() {
    return (
        <>
            <Navbar/>

            <div id="parent">

                <object className="pdf" data={resume_pdf}/>

            </div>

            <Footer/>
        </>
    )
}

export default Resume;
