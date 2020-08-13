import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typist from "react-typist";
import Technologies from "./technologies";
import "./home.css";

const heroSection = {
  marginTop: 20,
  marginLeft: 20,
  color: "white"
};

const rowStyle = {
  color: "white",
  backgroundColor: "blue"
};

const nameText = {
  color: "white",
  fontSize: 45,
  fontWeight: "bold",
  fontFamily: "Varela Round"
};

const descriptionText = {
  color: "#ABABAB",
  fontFamily: "Varela Round",
  fontSize: "2rem"
};

const helloText = {
  color: "#ABABAB"
};

const photoSection = {
  marginTop: 40
};

const Hero = () => {
  return (
    <div style={heroSection}>
      <div className="hero-screen-full">
        <Container>
          <Row style={{ height: "100vh" }}>
            <div />
            <Col data-aos="fade-right" lg={6} xs={12} sm={12}>
              <div className="photoSection">
                <img
                  className="myImage"
                  src="https://user-images.githubusercontent.com/45563022/89817007-1d6bb800-db65-11ea-8ee9-ac76704ddb99.png"
                  alt="Ritesh Sharma"
                />
              </div>
            </Col>

            <Col
              data-aos="fade-left"
              lg={6}
              xs={12}
              sm={12}
              style={{ marginTop: 70 }}
            >
              <span style={helloText}>
                Hello &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; नमस्ते
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Hola
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 你好
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; مرحبا
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; salut &nbsp; 👋
              </span>
              <Typist
                cursor={{ hideWhenDone: true }}
                avgTypingDelay={30}
                stdTypingDelay={20}
              >
                <span style={nameText}>I'm Ritesh Sharma</span>
                <br />
                <Typist.Delay ms={500} />
                <span style={descriptionText}>A Software Developer</span>
                <Typist.Backspace count={18} delay={300} />
                <span style={descriptionText}>Blogger</span>
                <Typist.Backspace count={8} delay={300} />
                <span style={descriptionText}>n Explorer</span>
                <Typist.Backspace count={11} delay={300} />
                <span style={descriptionText}>Web Development</span>
                <Typist.Backspace count={15} delay={300} />
                <span style={descriptionText}>Mobile App Development</span>
                <Typist.Backspace count={22} delay={300} />
                <span style={descriptionText}>Machine Learning</span>
                <Typist.Backspace count={16} delay={300} />
                <span style={descriptionText}>Deep Learning</span>
                <Typist.Backspace count={13} delay={300} />
                <span style={descriptionText}>A Software Developer</span>
              </Typist>
            </Col>
          </Row>
        </Container>

        <Container className="scroller">
          <section id="technologiesSection">
            <a href="#techSection">
              <span />
              <span />
              <span />
            </a>
          </section>
        </Container>
      </div>
      <section id="techSection">
        <Container>
          <Row data-aos="fade-left" className="technologies">
            <Technologies
              heading={"Programming Languages"}
              techType={"programming"}
            />
          </Row>
          <Row data-aos="fade-left" className="technologies">
            <Technologies heading={"Web Frameworks"} techType={"framework"} />
          </Row>
          <Row data-aos="fade-left" className="technologies">
            <Technologies
              heading={"Mobile App Development"}
              techType={"mobile"}
            />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
