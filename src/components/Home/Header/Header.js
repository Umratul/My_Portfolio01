import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

const Header = () => {
    return (
        <div>

<Container>
  <Row className="my-5 mx-0">
    <Col xs lg="6" className="text-center my-auto">
                        <h2>Umratul Omama Chowdhury</h2>
                        <h5>I'm A <span style={{ fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Student','Front-End Web Developer','React Developer']}
            loop={5}
            cursor
            cursorStyle=' 💻 '
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

          />
              </span></h5>
              <Container>
  <Row xs={6} md={4} lg={6}  className="justify-content-center">
                  <Col>
                  <a href="https://github.com/Umratul"><FaGithub /></a> 
    </Col>
    <Col><a href="https://www.linkedin.com/in/umratul-omama-chowdhury-487452223/"><FaLinkedin/></a></Col>
  </Row>
  
              </Container>
              
              {/* <div className="p-5">
                <a href="https://github.com/Umratul"><FaGithub /></a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/umratul-omama-chowdhury-487452223/"><FaLinkedin/></a>
                
              </div> */}
              <a href="https://drive.google.com/uc?id=1hUAdEcDiJKQw3PpX2Sw5xguu5TOpsPiS&export=download" download><Button>Download Resume</Button></a>

              <a href="/contact"><Button>Hire Me</Button></a>
              
                        
                        {/* <Button href="Omama's Resume_2.pdf">Resume</Button>  */}
    </Col>
    
    <Col xs md lg="6">
    <img src="https://image.freepik.com/free-vector/tiny-developers-programming-website-internet-platform-flat-vector-illustration-cartoon-programmers-near-screen-with-open-code-script-software-development-digital-technology-concept_74855-10168.jpg"  className="w-75" alt=""/>
    </Col>
  </Row>
  
</Container>

        </div>
    );
};

export default Header;