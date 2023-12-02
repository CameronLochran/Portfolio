import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false);

  const toRotate = ["Cameron Lochran", "Junior Software Developer"];

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  if (!isJourneyExpanded) {
    setIsJourneyExpanded(!isJourneyExpanded);
  }

  return (
    <>
      <section className="Hero" id="Hero">
        <Container>
          <Row className="align-items-centre">
            <Col>
              <h1>Welcome To My Portfolio</h1>
              <div className="textbox">
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Hero;
