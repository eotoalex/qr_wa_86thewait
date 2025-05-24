"use client";

import { useState } from 'react';
import Button from 'react-bootstrap-buttons';
import Modal from 'react-bootstrap-modal';


export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} animation={false}>
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
        <map name="workmap">
          <area
            shape="rect"
            coords="34,44,270,350"
            alt="Computer"
            onclick={handleShow}
          />
          <area
            shape="rect"
            coords="290,172,333,250"
            alt="Phone"
            onclick={handleShow}
          />
          <area
            shape="circle"
            coords="337,300,44"
            alt="Coffee"
            onclick={handleShow}
          />
        </map>
      </div>
    </div>
  );
}
