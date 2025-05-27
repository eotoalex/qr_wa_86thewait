"use client";

import { useState,useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './styles.css';

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePageRoutes = () => router.push('/orderPage');
  const log = () => console.log(screenSize)
  const router = useRouter();


  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  // const screenWidth = screenSize.width;
  // const screenHeight =screenSize.height;
  
useEffect( () => {
     const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // set initially
    return () => window.removeEventListener('resize', handleResize);
  }, []);

const container = {
  position: 'relative',
  backgroundColor: 'rgba(134, 26, 26, 0.4)',
  width: screenSize.width > 0 ? `${screenSize.width * 0.5}px` : '100%', // width in pixels or fallback
  height: screenSize.height > 0 ? `${screenSize.height * 0.5}px` : '100%', // width in pixels or fallback
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const containerStyle = {
  position: 'relative',
  aspectRatio: '16 / 9',
  overflow: 'hidden',
  backgroundColor: 'rgb(255, 254, 253)',
  // width: '622px',
  // height: '921px',
  width: screenSize.width > 0 ? `${screenSize.width * 0.5}px` : '100%', // width in pixels or fallback
  height: screenSize.height > 0 ? `${screenSize.height * 0.5}px` : '100%', // width in pixels or fallback
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',

};
const imageLayer = {
  position: 'absolute',
  objectFit: 'contain',
  width:'100%',
  height: '100%',
  zIndex: 0,
  overflow: 'hidden',
  margin:'0',
  padding:'0',
};
const overlayStyle = {
  position: 'absolute',
  top: '32%',
  left: '36%',
  width: '10%',
  height: '5%',
  backgroundColor: 'rgba(189, 222, 20, 0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '24px',
  zIndex: 1,
  cursor: 'pointer',
  border: "2px solid #ffff"
};
  return (
          
    <div style={container} >
      {/* Relative wrapper for Image and overlay */}
      <div style={containerStyle}> {/* Aspect ratio ensures height */}
        <Image
          src="/assets/input_page_04.svg"
          alt="Workplace"
          fill
          style={imageLayer}
          />
        {/* Overlay 1 */}
        <div 
        style={overlayStyle}
        className=''
        onClick={log}
        />
        </div>
              {/* Modal */}
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
        {/* <map name="#workmap">
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
        </map> */}
      
    </div>
  );
}





// EXAMPLE OF IMAGE OVERLAY BUT IT DOESN'T WORK IT JUST RENDERS THE OVERLAY ON THE FAR LEFT TOP OF THE IMAGE.

// "use client";

// import { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// export default function Home() {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const router = useRouter();

//   const handlePageRoutes = () => {
//     router.push('/orderPage');
//   };

  // return (
  //   <div className="max-w-7xl mx-auto py-12">
  //     {/* Relative wrapper for Image and overlay */}
  //     <div className="relative w-full aspect-[4/3]"> {/* Aspect ratio ensures height */}
  //       <Image
  //         src="/assets/input_page_04.svg"
  //         alt="Workplace"
  //         fill
  //         className="object-contain"
  //         priority
  //       />

  //       {/* Overlay 1 */}
  //       <div
  //         className="absolute bg-red-500/40 border border-black cursor-pointer"
  //         style={{
  //           top: '40%',
  //           left: '10%',
  //           width: '10%',
  //           height: '10%',
  //         }}
  //         onClick={handleShow}
  //       />

//         {/* Overlay 2 */}
//         <div
//           className="absolute bg-blue-500/40 border border-black cursor-pointer"
//           style={{
//             top: '60%',
//             left: '20%',
//             width: '15%',
//             height: '10%',
//           }}
//           onClick={handlePageRoutes}
//         />
//       </div>

      // {/* Modal */}
      // <Modal show={show} onHide={handleClose} animation={false} transition={false}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>Modal heading</Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      //   <Modal.Footer>
      //     <Button variant="secondary" onClick={handleClose}>
      //       Close
      //     </Button>
      //     <Button variant="primary" onClick={handleClose}>
      //       Save Changes
      //     </Button>
      //   </Modal.Footer>
      // </Modal>
//     </div>
//   );
// }

