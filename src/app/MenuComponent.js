"use client";
import { useState,useEffect,useRef } from 'react';
import {useSelector} from 'react-redux'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  goldSaucer,
  madeInHeaven,
  superSonic,
  psychoCrusher,
  yoshiIsland,
  loveIsBlue,
  mojito,
  margarita,
  sexOnTheBeach,
  tequilaSunrise,
  longIslandIcedTea,
  uptownMule,
  amarettoSour,
  pinaColada,
  regularCockTails,
  nonAlcoholicBev,
  oneUpBucket,
  onDraft,
  canBottle,
  fountainDrinks,
  redBull,
  bigDrinks,
  hookah

} from './overlayStyles';

export default function MenuComponent({Component, pageProps}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePageRoutes = () => router.push('/orderPage');
  const router = useRouter();
  const screenSizer = useSelector(state => state.screenSize);
  const divRef = useRef(null);
  const log = (e) =>  {
   const drink = e
    // const div = e.currentTarget;
    // const rect = div.getBoundingClientRect();
    // const div = document.querySelector('div');
    // console.log(div.getAttribute('data-info')); // "123"
    // console.log(e);
    // console.log(e.target);  // Access the element that was clicked
   console.log(e.target.getAttribute('textContent')); // Access the text content of the element
   console.log(e.target.getAttribute('data')); // Access a custom data attribute
    // console.log('Div info:', rect, div.getAttribute('data-info'));}
  }


  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
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
  }
  const containerStyle = {
    position: 'relative',
    aspectRatio: '6 / 10',
    overflow: 'hidden',
    backgroundColor: 'rgb(29, 5, 57)',
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
                style={goldSaucer}
                textContent="Gold Saucer"
                // value="jalkjdfl;a"
                data={["Amarreto","Spiced Rum","Orange Juice", "Pineapple Juice","Agave","Lime Juice"]}
                onClick={((e) => log(e))}
                />
                <div 
                style={madeInHeaven}
                className=''
                onClick={handleShow}
                />
                <div 
                style={superSonic}
                className=''
                onClick={handleShow}
                />
                <div 
                style={psychoCrusher}
                className=''
                onClick={handleShow}
                />
                <div 
                style={yoshiIsland}
                className=''
                onClick={handleShow}
                />
                <div 
                style={loveIsBlue}
                className=''
                onClick={handleShow}
                />
                <div 
                style={mojito}
                className=''
                onClick={handleShow}
                />
                <div 
                style={margarita}
                className=''
                onClick={handleShow}
                />
                <div 
                style={sexOnTheBeach}
                className=''
                onClick={handleShow}
                />
                <div 
                style={tequilaSunrise}
                className=''
                onClick={handleShow}
                />
                <div 
                style={longIslandIcedTea}
                className=''
                onClick={handleShow}
                />
                <div 
                style={uptownMule}
                className=''
                onClick={handleShow}
                />
                <div 
                style={amarettoSour}
                className=''
                onClick={handleShow}
                />
                <div 
                style={pinaColada}
                className=''
                onClick={handleShow}
                />
                <div 
                style={regularCockTails}
                className=''
                onClick={handleShow}
                />
                <div 
                style={nonAlcoholicBev}
                className=''
                onClick={handleShow}
                />
                <div 
                style={oneUpBucket}
                className=''
                onClick={handleShow}
                />
                <div 
                style={onDraft}
                className=''
                onClick={handleShow}
                />
                <div 
                style={canBottle}
                className=''
                onClick={handleShow}
                />
                <div 
                style={fountainDrinks}
                className=''
                onClick={handleShow}
                />
                <div 
                style={redBull}
                className=''
                onClick={handleShow}
                />
                <div 
                style={bigDrinks}
                className=''
                onClick={handleShow}
                />
                <div 
                style={hookah}
                className=''
                onClick={handleShow}
                />
                </div>
                
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
        </div>
  
  );
}
