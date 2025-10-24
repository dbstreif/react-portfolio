import './Resume.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Resume() {
    return (
        <>
            <Navbar/>

            <div id="parent">
                <object
                  className="pdf"
                  data="https://drive.google.com/file/d/1YqKm9fSLr0cpCSHCm3Fyu0_g-EwomnbL/preview"
                  type="application/pdf"
                  width="100%"
                  height="800px"
                >
                  <p>
                    No PDF Viewer available, please 
                    <Link
                      reloadDocument
                      style={{ paddingLeft: "6px" }}
                      to="https://drive.google.com/uc?export=download&id=1YqKm9fSLr0cpCSHCm3Fyu0_g-EwomnbL"
                    >
                        download
                    </Link>
                  </p>
                </object>

                <p style={{ paddingTop: "30px", fontSize: "18px" }}>
                  <Link
                    reloadDocument
                    style={{ paddingLeft: "6px" }}
                    to="https://drive.google.com/uc?export=download&id=1YqKm9fSLr0cpCSHCm3Fyu0_g-EwomnbL"
                  >
                    Download
                  </Link>
                </p>
            </div>

            <Footer/>
        </>
    )
}

export default Resume;
