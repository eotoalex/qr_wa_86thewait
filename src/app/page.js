"use client";

import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';


export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePageRoutes = () => router.push('/orderPage');
  const router = useRouter();
  // const navigate = useNavigate();

//  function handlePageRoute () {
//     return(useNavigate('./orderPage.js'))
//   }


  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <img
          src="/assets/input_page_04.svg"
          alt="Workplace"
          useMap="#workmap"
          className="block"

        />
         <>

    {/* Center this modal since it will be used by iphone and android devices.  */}
      <Modal show={show} onHide={handleClose} animation={false} transition={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        <map name="#workmap">
          <area
            shape="rect"
            coords="450,96,600,243"
            href="https://giphy.com/gifs/nintendo-mario-switch-3ohfFIJ9M9XCUkE6Na"
          />
          <area
            shape="rect"
            coords="141,364,299,409"
            onClick={handleShow}
          />
          <area
            shape="rect"
            coords="136,418,314,444"
            onClick={handlePageRoutes}
          />
        </map>
      </div>
    </div>
  );
}
