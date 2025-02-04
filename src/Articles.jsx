import './Articles.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Resume() {
    return (
        <>
            <Navbar/>

            <div id="parent">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7292289305123663872" height="598" width="504" frameBorder="0" allowfullscreen="" title="Embedded post"></iframe>
            </div>

            <Footer/>
        </>
    )
}

export default Resume;
