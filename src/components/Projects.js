import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
//import projImg1 from "../assets/img/project-img1.png";
//import projImg2 from "../assets/img/project-img2.png";
//import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import avgoulea from "../assets/img/avgoulea.jpg";
import duth from "../assets/img/duth.jpg";
import photoshop from "../assets/img/photoshop.png";
import udemy from "../assets/img/udemy.jpg";
import audax from "../assets/img/audax.jpg";
import msu from "../assets/img/msu.png";
import osd from "../assets/img/osd.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Preschool",
      description: "Ages:4-6",
      imgUrl: avgoulea,
    },
    {
      title: "Primary School",
      description: "Ages: 6-12",
      imgUrl: avgoulea,
    },
    {
      title: "Secondary School",
      description: "Ages: 12-18",
      imgUrl: avgoulea,
    },
    {
      title: "C2 Proficiency",
      description: "MSU",
      imgUrl: msu,
    },
    {
      title: "A2",
      description: "ÖSD ZERTIFIKAT",
      imgUrl: osd,
    },
    {
      title: "B1",
      description: "ÖSTERREICHISCHES SPRACHDIPLOM DEUTSCH,",
      imgUrl: osd,
    },
    {
      title: "Democritus University of Thrace",
      description: "Electrical and Computer Engineering",
      imgUrl: duth,
    },
    {
      title: "Ultimate Ethical Hacking Seminar",
      description: "by Audax Cybersecurity",
      imgUrl: audax,
    },
    {
      title: "Ethical Hacking Seminar",
      description: "by Audax Cybersecurity",
      imgUrl: audax,
    },
    {
      title: "Photoshop Masterclass",
      description: "by Alexandros Karpas",
      imgUrl: photoshop,
    },
    {
      title: "Udemy Certification",
      description: "Advanced knowledges, deep dive in C++",
      imgUrl: udemy,
    },
    {
      title: "Udemy Certification",
      description: "Learn NextJS 14 from the ground up and build fullstack ReactJS + NextJS apps with the App Router or Pages Router!, still studying on that",
      imgUrl: udemy,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me:</h2>
                <p>On the first tab you will find information about my education.</p>
                <p>On the second tab you will find my projects.</p>
                <p>On the third tab you will find the upcoming projects.</p>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I have worked as a photo editor and creator in a YouTube channel. My job was to create attractive thumbnails.</p>                
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Right now im building this website. I have also started building an appointment website for a barber shop. </p>
                      <p>Though please feel free to connect with me and build a new Project together!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
