import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <span className="brand-mark" aria-label="Argyrios Gkanatsios">AG.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => setActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => setActiveLink("skills")}>Expertise</Nav.Link>
            <Nav.Link href="#profile" className={activeLink === "profile" ? "active navbar-link" : "navbar-link"} onClick={() => setActiveLink("profile")}>Profile</Nav.Link>
            <Nav.Link href="#connect" className={activeLink === "connect" ? "active navbar-link" : "navbar-link"} onClick={() => setActiveLink("connect")}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <span className="social-icon">
              <a href="https://www.linkedin.com/in/argyrios-gkanatsios-a933a12a6/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/argyrisgkanatsios" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/argyrisgk/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
            </span>
            <a className="nav-cta" href="/ArgyriosGkanatsiosCV.pdf" download>
              <span>Download CV</span>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
