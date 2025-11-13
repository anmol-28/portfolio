import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import washit from "../../Assets/Projects/chatify.png";
import storeex from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={washit}
              isBlog={false}
              title="WashIt - Laundry Management System"
              description="Developed a full stack web application using Java, Bootstrap and MySQL to digitize hostel laundry services. Implemented user authentication for students and laundry personnel with form validation. Enabled students to input clothing details, while laundry staff could filter/search orders by room and hostel. Integrated email notifications using Java SMTP for scheduled pickup/reminders."
              ghLink="https://github.com/anmol-28"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storeex}
              isBlog={false}
              title="StoreEx - Store Management System"
              description="Created a responsive, database-driven store management system using PHP, phpMyAdmin (MySQL), HTML, CSS, and Bootstrap. Replaced manual, paper-based inventory tracking with a secure digital interface for faculty and department staff. Enabled login-based access and real-time item updates across departments with easy CRUD operations. Reduced errors, streamlined data handling, and improved availability with a 24/7 accessible web-based system."
              ghLink="https://github.com/anmol-28"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
