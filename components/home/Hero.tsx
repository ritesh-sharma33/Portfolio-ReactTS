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

const photoSection = {
  marginTop: 40
};

const Hero = () => {
  return (
    <div style={heroSection}>
      <div className="hero-screen-full">
        <Container>
          <Row className="heroRow">
            <Col data-aos="fade-right" lg={6} xs={12} sm={6}>
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
              sm={6}
              className="nameColumn"
            >
              <span className="helloText">
                Hello &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; नमस्ते
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Hola
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 你好
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; مرحبا
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; salut &nbsp; 👋
              </span>
              <br /><br />
              <Typist
                cursor={{ hideWhenDone: true }}
                avgTypingDelay={30}
                stdTypingDelay={20}
              >
                <span className="nameText">I'm Ritesh Sharma</span>
                <br /><br />
                <Typist.Delay ms={500} />
                <span className="descriptionText">A Software Developer</span>
                <Typist.Backspace count={18} delay={300} />
                <span className="descriptionText">Blogger</span>
                <Typist.Backspace count={8} delay={300} />
                <span className="descriptionText">n Explorer</span>
                <Typist.Backspace count={11} delay={300} />
                <span className="descriptionText">Web Development</span>
                <Typist.Backspace count={15} delay={300} />
                <span className="descriptionText">Mobile App Development</span>
                <Typist.Backspace count={22} delay={300} />
                <span className="descriptionText">Machine Learning</span>
                <Typist.Backspace count={16} delay={300} />
                <span className="descriptionText">Deep Learning</span>
                <Typist.Backspace count={13} delay={300} />
                <span className="descriptionText">A Software Developer</span>
              </Typist>
              <div className="socialHandleSection">
                <a href="https://www.facebook.com/sharmaritesh3312/">
                  <img
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330017-48bc3000-dfc7-11ea-8171-bdac7c7f2ba3.png"
                  />
                </a>
                <a href="https://github.com/ritesh-sharma33">
                  <img
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330053-89b44480-dfc7-11ea-8f97-b0f1f45761bd.png"
                  />
                </a>
                <a href="https://twitter.com/sharma_ritesh33">
                  <img
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330082-cbdd8600-dfc7-11ea-998d-d3ebfeb3728c.png"
                  />
                </a>
                <a href="https://www.linkedin.com/in/sharmaritesh33/">
                  <img
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330101-edd70880-dfc7-11ea-9a1b-ed15bd2b52f4.png"
                  />
                </a>
                <a href="https://medium.com/@sharmaritesh3312">
                  <img
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330143-1bbc4d00-dfc8-11ea-8aab-39f0e04f7e91.png"
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCULHutsJDu3AayYWPZD8f9g">
                  <img
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330161-4d351880-dfc8-11ea-93a3-72f45d58dcdb.png"
                  />
                </a>
              </div>
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
          <Row data-aos="fade-left" className="technologies">
            <Technologies heading={"Others"} techType={"misc"} />
          </Row>
        </Container>
      </section>
      <section id="socialMediaAtBottom">
        <span className="reachMeOutTxt">Reach me out</span><br /><br />
        <a href="https://www.facebook.com/sharmaritesh3312/">
          <img
            className="socialHandleIconBottom"
            src="https://user-images.githubusercontent.com/45563022/90330017-48bc3000-dfc7-11ea-8171-bdac7c7f2ba3.png"
          />
        </a>
        <a href="https://github.com/ritesh-sharma33">
          <img
            className="socialHandleIconBottom"
            src="https://user-images.githubusercontent.com/45563022/90330053-89b44480-dfc7-11ea-8f97-b0f1f45761bd.png"
          />
        </a>
        <a href="https://twitter.com/sharma_ritesh33">
          <img
            className="socialHandleIconBottom"
            src="https://user-images.githubusercontent.com/45563022/90330082-cbdd8600-dfc7-11ea-998d-d3ebfeb3728c.png"
          />
        </a>
        <a href="https://www.linkedin.com/in/sharmaritesh33/">
          <img
            className="socialHandleIconBottom"
            src="https://user-images.githubusercontent.com/45563022/90330101-edd70880-dfc7-11ea-9a1b-ed15bd2b52f4.png"
          />
        </a>
        <a href="https://medium.com/@sharmaritesh3312">
          <img
            className="socialHandleIconBottom"
            src="https://user-images.githubusercontent.com/45563022/90330143-1bbc4d00-dfc8-11ea-8aab-39f0e04f7e91.png"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCULHutsJDu3AayYWPZD8f9g">
          <img
            className="socialHandleIconBottom"
            src="https://user-images.githubusercontent.com/45563022/90330161-4d351880-dfc8-11ea-93a3-72f45d58dcdb.png"
          />
        </a>
      </section>
    </div>
  );
};

export default Hero;
