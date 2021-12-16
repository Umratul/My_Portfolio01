import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { faMobileAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="ft-body mt-5 ">
            {/* <h2 className="text-primary px-5 pt-2 pb-2">CarRev</h2>
            <p className=" ">Best Car Dealer</p> */}
        

        <Container className='justify-content-center'>
        <div className='text'>
         
            <h3 className='pt-3'>Contact Info</h3>
            <hr />
          <div>
          <FontAwesomeIcon icon={faMobileAlt} className='icons' /> +880-1867321062
          </div>
          <div>
          <FontAwesomeIcon icon={faEnvelope} className='icons'/> umratul0904@gmail.com
          </div>
          <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='icons'/> Dampara,Chattogram,Bangladesh
            </div>
            
        </div>
        </Container>


        { /*<Container className='d-flex justify-content-center'>
        <div className='mx-5'>
        
          <div>
          <a href="https://github.com/Umratul"><FontAwesomeIcon icon={faGithub} className='icons'/> Github</a>
          </div>
          <div>
          <a href="https://www.linkedin.com/in/umratul-omama-chowdhury-487452223/"><FontAwesomeIcon icon={faLinkedinIn} className='icons'/> LinkedIn</a>
          </div>
            </div>
            

          <div className='contact-info'>
         
            <h3>Contact Info</h3>
          <div>
          <FontAwesomeIcon icon={faMobileAlt} className='icons' /> +880-1867321062
          </div>
          <div>
          <FontAwesomeIcon icon={faEnvelope} className='icons'/> umratul0904@gmail.com
          </div>
          <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='icons'/> Dampara,Chattogram,Bangladesh
            </div>
            
        </div>
        </Container> */}

        
        
        {/* <Container>

      
        <Row className="justify-content-md-center">

        <Col xs lg="6">
          <a href="https://github.com/Umratul"><FontAwesomeIcon icon={faGithub} className='icons'/> Github</a>
            </Col>
            
      <Col xs lg="6">
          <a href="https://www.linkedin.com/in/umratul-omama-chowdhury-487452223/"><FontAwesomeIcon icon={faLinkedinIn} className='icons'/> LinkedIn</a>
              </Col>
          
            
      <Col xs lg="6">
      
                <div><FontAwesomeIcon icon={faMobileAlt} className='icons' /> +880-1867321062
                </div>
      </Col>
      <Col xs lg="6">
      <FontAwesomeIcon icon={faEnvelope} className='icons'/> umratul0904@gmail.com
          </Col>
          
          
          
        </Row>
        
            </Container> */}
             <hr />
         
         <p className="text">Copyright © 2021 | All Rights Reserved by Umratul</p>
      </div>
    );
};

export default Footer;