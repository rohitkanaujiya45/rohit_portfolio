import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Rohit_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [heightOfMyScreen, setHeightOfMyScreen] = useState(window.innerHeight);
  const [widthOfMyScreen, setWidthOfMyScreen] = useState(window.innerWidth);

  useEffect(() => {
    // Update the screen height when the window is resized
    const handleResize = () => {
      setHeightOfMyScreen(window.innerHeight);
      setWidthOfMyScreen(window.innerWidth);
    };

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isMobile, setIsMobile] = useState({});

  useEffect(() => {
    if (heightOfMyScreen > 621) {
      setIsMobile({
        scaleProp: 0.6,
        heightProp: '31rem'
      })
    } else {
      setIsMobile({
        scaleProp: 1.6,
        heightProp: '83rem'
      })
    }
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* <Particle /> */}
        <Row className="resume">
          {/* {console.log("height: " + heightOfMyScreen)}
          {heightOfMyScreen}
          <br />
          {console.log("width: " + widthOfMyScreen)}
          {widthOfMyScreen} */}
          {/* <div style={{ height: heightOfMyScreen > '606' ? '800px' : '400px' , overflowY: "hidden" }}> */}
          {/* <div style={{ height: '33rem' , overflowY: "hidden" }}> */}
          <div style={{ height: `${isMobile.heightProp}`, overflowY: "hidden" }}>
            <Document file={pdf} className="d-flex justify-content-center">
              {/* <Page pageNumber={1} scale={0.6} /> */}
              <Page pageNumber={1} scale={isMobile.scaleProp} />
            </Document>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
