import './Resume.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Resume() {
    return (
        <>
            <Navbar/>

            <div id="parent">

                <object className="pdf" data="https://docs.google.com/document/d/1PolR2TZ2WTlrCwjUfIAfNxmgGSQdx-FnxpmOL051P9k/preview?format=pdf">
                    <p>
                        No PDF Viewer available, view in
                        <Link reloadDocument style={{"padding-left": "6px"}} to="https://docs.google.com/document/d/1PolR2TZ2WTlrCwjUfIAfNxmgGSQdx-FnxpmOL051P9k/view?usp=sharing">
                            docs
                        </Link>
                    </p>
                </object>
                <p style={{"padding-top": "30px", "font-size": "18px"}}>
                    <Link reloadDocument style={{"padding-left": "6px"}} to="https://docs.google.com/document/d/1PolR2TZ2WTlrCwjUfIAfNxmgGSQdx-FnxpmOL051P9k/export?format=pdf" >
                        Download
                    </Link>
                </p>

            </div>

            <Footer/>
        </>
    )
}

export default Resume;
