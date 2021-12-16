import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import Particles from "react-tsparticles";
import './Header.css';

const Header = () => {
  const particlesInit = (main) => {
    console.log(main);

  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

    return (
        <div>
          <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 4,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#483D8B","#DC143C","#FF69B4","#32CD32","#800080"],
          },
          
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: ["circle","square","triangle","star","polygon"],
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
        />


<Container>
  <Row className="my-5 mx-0">
    <Col xs="6" md="4" lg="6" className="text-center my-auto">
                        <h2 className='mt-3'>Umratul Omama Chowdhury</h2>
                        <h5>I'm A <span style={{ fontWeight: 'bold',color:'rgb(43, 66, 128)' }}>
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
              
              <a href="https://drive.google.com/uc?id=1hUAdEcDiJKQw3PpX2Sw5xguu5TOpsPiS&export=download" download><Button className='resume_btn'>Download Resume</Button></a>

              <a href="/contact"><Button className='hireMe_btn'>Hire Me</Button></a>
              <hr></hr>
              <Container>
  <Row xs={6} md={4} lg={6} className="justify-content-center ">
                  <Col className='connection'>
                  <a href="https://github.com/Umratul"><FaGithub /></a> 
    </Col>
    <Col><a href="https://www.linkedin.com/in/umratul-omama-chowdhury-487452223/"><FaLinkedin/></a></Col>
  </Row>
  
              </Container>
                        
                        {/* <Button href="Omama's Resume_2.pdf">Resume</Button>  */}
    </Col>
    
    <Col xs="6" md="8" lg="6">
    <img src="https://image.freepik.com/free-vector/tiny-developers-programming-website-internet-platform-flat-vector-illustration-cartoon-programmers-near-screen-with-open-code-script-software-development-digital-technology-concept_74855-10168.jpg"  className="header-img" alt=""/>
    </Col>
  </Row>
  
</Container>

        </div>
    );
};

export default Header;