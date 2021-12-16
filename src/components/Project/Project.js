import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
// import './project.css';

const Project = (props) => {
    const {  name, img, body, liveSite } = props.project;

        const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
    return (
        <div className="p-2">
  
             <div className=" border border-3 border-secondary rounded-3 container">
            <img className="h-25 w-50 img-thumbnail" src={img} alt="" />
            <h2 className="text-danger fst-italic">{name}</h2>
            <p>{body}</p>
                {/* <button>Details</button> */}
                <>
        {values.map((v, idx) => (
          <Button key={idx} className="mb-3 hireMe_btn" onClick={() => handleShow(v)}>
            Details
            {typeof v === 'string' && `below ${v.split('-')[0]}`}
          </Button>
        ))}
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          {/* <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body> */}
              {/* border border-3 border-secondary rounded-3 */}
              <div className="container justify-content-center ">
            <img className="img-fluid " src={img} alt="" />
            <h2 className="text-danger fst-italic">{name}</h2>
                <p>{body}</p>
                
                <a href={liveSite} ><Button className='hireMe_btn'>Live Site</Button> </a>
              </div>
        </Modal>
      </>
                

                

                
  </div>
       </div>

    );
};

// const Project = () => {
//     const values = [true];
//     const [fullscreen, setFullscreen] = useState(true);
//     const [show, setShow] = useState(false);
  
//     function handleShow(breakpoint) {
//       setFullscreen(breakpoint);
//       setShow(true);
//     }
  
//     return (
      // <>
      //   {values.map((v, idx) => (
      //     <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
      //       Full screen
      //       {typeof v === 'string' && `below ${v.split('-')[0]}`}
      //     </Button>
      //   ))}
      //   <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
      //     <Modal.Header closeButton>
      //       <Modal.Title>Modal</Modal.Title>
      //     </Modal.Header>
      //     <Modal.Body>Modal body content</Modal.Body>
      //   </Modal>
      // </>
//     );
//   }
  
 

export default Project;