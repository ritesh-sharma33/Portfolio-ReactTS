import React, { ReactElement, useState } from "react";
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
import { Container, Row, Col, Button } from "react-bootstrap";
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

const data = {
  name: "Ritesh Sharma",
  age: 21,
  currentLocation: "Cuttack, Odisha",
  status: "Eat! Sleep! Code! Repeat! 🔁",
  passion: "Technical Blogging"
};

const AboutPage = () => {
  const [ideVisible, setIdeVisible] = useState(true);

  return (
    <div className="aboutPage">
      <div className="aboutPageHero">
        <Container>
          <Row className="aboutPageHeroRow">
            <Col data-aos="fade-right" lg={4} xs={12} sm={12}>
              {getRandomSvgElement()}
            </Col>
            <Col data-aos="fade-left" lg={8} xs={12} sm={12}>
              {ideVisible ? (
                <div className="ideSection" id="sectionForIde">
                  <Typist
                    className="introSection"
                    cursor={{
                      show: true,
                      blink: true,
                      element: "|",
                      hideWhenDone: false,
                      hideWhenDoneDelay: 1000
                    }}
                    avgTypingDelay={40}
                    stdTypingDelay={70}
                  >
                    <span className="heroIntroText">
                      <span className="classname">Developer</span>{" "}
                      <span className="variablename"> developer</span> ={" "}
                      <span className="keyword">new </span>{" "}
                      <span className="classname">Developer</span>();
                    </span>
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">developer</span>.
                      <span className="methodname">setName</span>(
                      <span className="stringliteral">"Ritesh Sharma"</span>);
                    </span>
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">developer</span>.
                      <span className="methodname">setAge</span>(
                      <span className="numberliteral">21</span>);
                    </span>
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">developer</span>.
                      <span className="methodname">setCurrentLocation</span>(
                      <span className="stringliteral">"Cuttack, Odisha"</span>);
                    </span>
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">developer</span>.
                      <span className="methodname">setStatus</span>(
                      <span className="stringliteral">
                        "Eat! Sleep! Code! Repeat 🔁"
                      </span>
                      );
                    </span>
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">developer</span>.
                      <span className="methodname">setPassion</span>(
                      <span className="stringliteral">
                        "Technical Blogging"
                      </span>
                      );
                    </span>
                    <br />
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">console</span>.
                      <span className="methodname">log</span>(
                      <span className="variablename">developer</span>);
                    </span>
                    <br />
                    <br />
                    <br />
                    <Button
                      onClick={() => setIdeVisible(false)}
                      variant="outline-success"
                    >
                      Run Snippet
                    </Button>
                  </Typist>
                </div>
              ) : (
                <div className="outputSection">
                  <pre className="introOutput">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                  <br />
                  <br />
                  <Button
                    onClick={() => setIdeVisible(!ideVisible)}
                    variant="outline-info"
                  >
                    Back to basics
                  </Button>
                </div>
              )}
            </Col>
          </Row>
        </Container>
        <Container className="scroller">
          <section id="technologiesSection">
            <a href="#educationalBackground">
              <span />
              <span />
              <span />
            </a>
          </section>
        </Container>
      </div>
      <section id="#educationalBackground">
        <span className="sectionHeadingText">Educational Background</span>
      </section>
    </div>
  );
};

export default AboutPage;
