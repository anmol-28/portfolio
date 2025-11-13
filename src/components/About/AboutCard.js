import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Anmol J. Bhaiya</span>,{" "}
            a passionate <span className="purple">Cybersecurity Enthusiast</span> and{" "}
            <span className="purple">Computer Science Engineer</span>.
            <br />
            I'm currently pursuing my{" "}
            <span className="purple">B.E. in Computer Science and Engineering</span> from{" "}
            <span className="purple">Maharaja Sayajirao University, Baroda</span>.
            <br />
            <br />
            My focus lies in web application security, vulnerability assessment, 
            and ethical hacking — driven by curiosity to uncover and fix real-world 
            security flaws.
            <br />
            <br />
            Outside of cybersecurity, I love engaging in activities that keep me
            sharp and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in CTF Competitions 🚩
            </li>
            <li className="about-activity">
              <ImPointRight /> Penetration Testing & Bug Bounty Hunting 🔍
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Secure Web Applications 🛡️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Making the web a safer place, one vulnerability at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Anmol</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
