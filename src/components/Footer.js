import { Col, Container, Row } from "react-bootstrap";
import { Download, Linkedin } from "react-bootstrap-icons";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-cta">
          <div>
            <span className="section-kicker">Let's connect</span>
            <h3>Interested in cybersecurity, engineering or building something useful?</h3>
          </div>
          <div className="footer-cta-actions">
            <a href="https://www.linkedin.com/in/argyrios-gkanatsios-a933a12a6/" target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn
            </a>
            <a href="/ArgyriosGkanatsiosCV.pdf" download>
              <Download /> Download CV
            </a>
          </div>
        </div>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <a className="footer-brand" href="#home" aria-label="Back to top">AG.</a>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/argyrios-gkanatsios-a933a12a6/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/argyrisgkanatsios" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/argyrisgk/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>© {new Date().getFullYear()} Argyrios D. Gkanatsios</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
