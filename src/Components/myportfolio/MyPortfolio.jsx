import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import nadeemImg from '../../assets/nadeemImg.jpg'

function MyPortfolio() {
  const [activeLink, setActiveLink] = useState('home');
  
  // Handle scroll to update active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'contact'];
      const currentPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const topPosition = element.offsetTop;
          const height = element.offsetHeight;
          
          if (currentPosition >= topPosition && currentPosition <= topPosition + height) {
            setActiveLink(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to section on click
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
      setActiveLink(sectionId);
    }
  };

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                className={activeLink === 'home' ? 'active' : ''} 
                onClick={() => scrollToSection('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                className={activeLink === 'about' ? 'active' : ''} 
                onClick={() => scrollToSection('about')}
              >
                About
              </Nav.Link>
              <Nav.Link 
                className={activeLink === 'skills' ? 'active' : ''} 
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                className={activeLink === 'contact' ? 'active' : ''} 
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home Section */}
      <section id="home" className="py-5 bg-light text-center vh-100 d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
              <p className="lead">Frontend Developer & UI/UX Enthusiast</p>
              <button 
                className="btn btn-primary btn-lg mt-3"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-5">About Me</h2>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="bg-secondary rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px' }}>
                <img src={nadeemImg} alt='My Portfolio' style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' ,borderRadius:'50%' }} />
                {/* <span className="text-white fs-1">👤</span> */}
              </div>
            </Col>
            <Col md={6}>
              <h3>Who Am I?</h3>
              <p>I'm a passionate web developer with a strong focus on creating intuitive and responsive user interfaces. With experience in modern frameworks like React, I strive to build applications that not only look good but also provide exceptional user experiences.</p>
              <p>I'm constantly learning and exploring new technologies to stay updated with the latest trends in web development.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">My Skills</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <h4>Frontend Development</h4>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>HTML/CSS</span>
                      <span>90%</span>
                    </div>
                    <ProgressBar now={90} variant="success" />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>JavaScript</span>
                      <span>85%</span>
                    </div>
                    <ProgressBar now={85} variant="info" />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>React</span>
                      <span>80%</span>
                    </div>
                    <ProgressBar now={80} variant="primary" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <h4>Other Skills</h4>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>Responsive Design</span>
                      <span>85%</span>
                    </div>
                    <ProgressBar now={85} variant="warning" />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>UI/UX Design</span>
                      <span>75%</span>
                    </div>
                    <ProgressBar now={75} variant="danger" />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>Git/GitHub</span>
                      <span>80%</span>
                    </div>
                    <ProgressBar now={80} variant="dark" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-5">Get In Touch</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="shadow">
                <Card.Body>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control" id="message" rows="5" placeholder="Your message here..."></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Send Message</button>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p className="mb-0">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default MyPortfolio;