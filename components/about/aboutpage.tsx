import React, { ReactElement } from "react";
import {
  programmingSvgElement,
  reactSvgElement,
  codeReviewSvgElement,
  codeInsectionSvgElement,
  openSourceSvgElement,
  bugFixingSvgElement,
  versionControlSvgElement,
  codingSvgElement,
  freelancerSvgElement,
  webDeveloperSvgElement,
  javascriptFrameworkSvgElement
} from "./svgelements.tsx";
import { Container, Row, Col } from "react-bootstrap";
import Typist from "react-typist";

const getRandomSvgElement = () => {
  const arrayOfSvgElements = [
    programmingSvgElement,
    reactSvgElement,
    codeReviewSvgElement,
    codeInsectionSvgElement,
    openSourceSvgElement,
    bugFixingSvgElement,
    versionControlSvgElement,
    codingSvgElement,
    freelancerSvgElement,
    webDeveloperSvgElement,
    javascriptFrameworkSvgElement
  ];
  let index = Math.ceil(Math.random() * (10 - 0) + 0);
  console.log("Random: " + index);
  return arrayOfSvgElements[index];
};

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <Container>
        <Row className="aboutPageHeroRow">
          <Col data-aos="fade-right" lg={4} xs={12} sm={12}>
            {getRandomSvgElement()}
          </Col>
          <Col data-aos="fade-left" lg={8} xs={12} sm={12}>
            <div className="ideSection">
              <Typist
                className="introSection"
                cursor={{ hideWhenDone: true }}
                avgTypingDelay={30}
                stdTypingDelay={20}
              >
                <span className="heroIntroText">
                  <span className="classname">Developer</span> <span className="variablename"> developer</span> = <span className="keyword">new </span> <span className="classname">Developer</span>();
                </span><br />
                <span className="heroIntroText">
                  <span className="variablename">developer</span>.<span className="methodname">setName</span>(<span className="stringliteral">"Ritesh Sharma"</span>);
                </span><br />
                <span className="heroIntroText">
                  <span className="variablename">developer</span>.<span className="methodname">setAge</span>(<span className="numberliteral">21</span>);
                </span><br />
                <span className="heroIntroText">
                  <span className="variablename">developer</span>.<span className="methodname">setCurrentLocation</span>(<span className="stringliteral">"Cuttack, Odisha"</span>);
                </span><br />
                <span className="heroIntroText">
                  <span className="variablename">developer</span>.<span className="methodname">setStatus</span>(<span className="stringliteral">"Eat! Sleep! Code! Repeat 🔁"</span>);
                </span><br />
              </Typist>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
