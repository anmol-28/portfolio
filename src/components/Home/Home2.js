import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Cybersecurity Enthusiast and Computer Science Engineer 
              currently pursuing my B.E. in Computer Science and Engineering from 
              Maharaja Sayajirao University, Baroda.
              <br />
              <br />
              My focus lies in
              <i>
                <b className="purple">
                  {" "}
                  Web Application Security, Vulnerability Assessment, and Ethical Hacking{" "}
                </b>
              </i>
              — driven by curiosity to uncover and fix real-world security flaws.
              <br />
              <br />
              I've gained hands-on experience with tools like
              <i>
                <b className="purple">
                  {" "}
                  Burp Suite and Kali Linux,{" "}
                </b>
              </i>
              and have successfully discovered and responsibly disclosed a 2FA bypass 
              vulnerability in a university portal.
              <br />
              <br />
              My interests extend to
              <b className="purple"> CTF competitions, Penetration Testing, </b>
              and{" "}
              <i>
                <b className="purple">Secure Software Development</b>.
              </i>
              <br />
              <br />
              I'm constantly expanding my skill set in
              <b className="purple"> Java, JavaScript, SQL, Linux, and Network Security</b>, 
              staying up to date with ISO 27001, GDPR, and emerging cyber defense standards.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
