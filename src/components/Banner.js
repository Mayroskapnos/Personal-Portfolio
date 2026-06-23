import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, Download, Linkedin } from "react-bootstrap-icons";
import headerImg from "../assets/img/argi-linkedin-transparent.png";

const ROTATING_TITLES = [
  "Cybersecurity Engineer.",
  "Offensive Security Enthusiast.",
  "Electrical & Computer Engineer."
];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      const currentText = ROTATING_TITLES[loopNum % ROTATING_TITLES.length];
      const updatedText = isDeleting
        ? currentText.substring(0, text.length - 1)
        : currentText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((previousDelta) => previousDelta / 2);
      }

      if (!isDeleting && updatedText === currentText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((previousLoop) => previousLoop + 1);
        setDelta(300);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, isDeleting, loopNum, text]);

  return (
    <section className="banner" id="home">
      <div className="hero-data-line hero-data-line-one" aria-hidden="true"></div>
      <div className="hero-data-line hero-data-line-two" aria-hidden="true"></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <div className="hero-copy">
              <div className="hero-status">
                <span className="status-pulse"></span>
                Available for ambitious security projects
              </div>
              <span className="tagline">Cybersecurity · Engineering · Leadership</span>
              <h1>
                Hi, I'm Argyrios Gkanatsios.
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Electrical and Computer Engineering student focused on cybersecurity
                and offensive security. I build realistic security labs, Red Team / Blue
                Team scenarios, and technical solutions that connect engineering with
                real-world security challenges.
              </p>
              <div className="banner-actions">
                <a className="banner-link primary" href="#profile">
                  Explore my profile <ArrowRightCircle size={22} />
                </a>
                <a className="banner-link secondary" href="/ArgyriosGkanatsiosCV.pdf" download>
                  <Download size={20} /> Download CV
                </a>
              </div>
              <a
                className="banner-linkedin"
                href="https://www.linkedin.com/in/argyrios-gkanatsios-a933a12a6/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> Connect with me on LinkedIn
              </a>
            </div>
          </Col>
          <Col xs={12} md={5} xl={5}>
            <div className="hero-stage">
              <div className="hero-portal" aria-hidden="true">
                <span className="portal-ring ring-one"></span>
                <span className="portal-ring ring-two"></span>
                <span className="portal-ring ring-three"></span>
                <span className="portal-core"></span>
              </div>
              <div className="hero-portrait">
                <img src={headerImg} alt="Argyrios Gkanatsios" />
                <span className="portrait-scan" aria-hidden="true"></span>
              </div>
              <div className="hero-tech-card hero-tech-card-top">
                <span>FOCUS</span>
                <strong>OFFENSIVE SECURITY</strong>
              </div>
              <div className="hero-tech-card hero-tech-card-frontend">
                <span>FRONTEND</span>
                <strong>HTML/CSS · JAVASCRIPT · REACT</strong>
              </div>
              <div className="hero-tech-card hero-tech-card-bottom">
                <span>SYSTEM</span>
                <strong>RED / BLUE TEAM</strong>
              </div>
              <div className="hero-tech-card hero-tech-card-backend">
                <span>BACKEND</span>
                <strong>PYTHON · JAVA · KOTLIN · C/C++</strong>
              </div>
              <div className="hero-platform" aria-hidden="true"></div>
            </div>
          </Col>
        </Row>
      </Container>
      <a className="scroll-cue" href="#skills" aria-label="Scroll to expertise">
        <span>Scroll to explore</span>
        <i></i>
      </a>
    </section>
  );
};
