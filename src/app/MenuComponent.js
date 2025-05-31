"use client";
import { useState,useEffect,useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux'
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
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const updateSomething = (drink,ingredients) => {
    dispatch({ type: 'DRINKORDER', payload: drink });
    dispatch({ type: 'INGREDIENTS', payload: ingredients });
  };
  const logToState =  (e) =>  {
    const drink = e.target.getAttribute('textContent');
    const ingredients = e.target.getAttribute('data');
    const addToState =  updateSomething(drink,ingredients)
    addToState
  }

  const testFunction = () => {
    console.log(state)
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
                <div 
                style={goldSaucer}
                textContent="Gold Saucer"
                data={["Amarreto","Spiced Rum","Orange Juice", "Pineapple Juice","Agave","Lime Juice"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={madeInHeaven}
                textContent="Made in Heaven"
                data={["Amarreto","Sour Mix","Grenadine", "Passion Fruit Juice","Sprite"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={superSonic}
                textContent="Super Sonic"
                data={["Tequila", "Peach Schnapps", "Passion Fruit Juice"]}
                onClick={((e) => logToState(e))}
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
