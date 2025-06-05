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
import { v4 as uuidv4 } from 'uuid';

export default function MenuComponent({Component, pageProps}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePageRoutes = () => router.push('/orderPage');
  const router = useRouter();
  const state = useSelector(state => state);
  const drink = state.order.drink.drink;
  const ingredients = state.order.drink.ingredients;
  const quantity = state.order.drink.quantity;

  const dispatch = useDispatch();
  
//   const orderObj = orderObject
  const updateSomething = (drink,ingredients) => {
   
    dispatch({ type: 'DRINKORDER', payload: drink });
    // dispatch({ type: 'INGREDIENTS', payload: ingredients });
  };
  const logToState =  (e) =>  {
    const drink = e.target.getAttribute('textContent');
    const ingredients = e.target.getAttribute('data');
    const price = "2.99";
    const id = uuidv4();
    const quantity = "1";
    const orderObject = {
        id:id,
        drink:drink,
        ingredients:ingredients,
        price:price,
        quantity: quantity
    };
    const addToState =  updateSomething(orderObject)
    addToState

    return (
        handleShow () 
    )
  };

  const testFunction = () => {
    console.log(state)
  };

  const addToCart = () => {
    // Create a visual of the cart with a delete or garbage button to remove or edit items in the cart.
     dispatch({ type: 'ADDTOCART', payload: drink });
    // Get a small modal on the top right of the screen to confirm this order of the drink.
    console.log("Your ",drink," was added to the cart successfully.")
    handleClose()
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
                {/* Add a shot button should be added to each presable overlay */}
                 {/* Add a hookah button should be added to each presable overlay */}
                
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
                textContent="Psycho Crusher"
                data={["Cognac", "Blue Curacao", "Grenadine","Sour Mix","Sprite"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={yoshiIsland}
                textContent="Yoshi's Island"
                data={["Vodka", "Lemon Liqueur", "Sour Mix","Sour Apple","Pineapple Juice"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={loveIsBlue}
                textContent="Love is Blue"
                data={["Rum", "Blue Curacao", "Coconut Cream","Heavy Cream","Pineapple Juice"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={mojito}
                textContent="Mojito"
                data={["Rum", "Lime Juice", "Soda","Simple Syrup","Mint"]}
                // Need to add a flavors feature here.
                onClick={((e) => logToState(e))}
                />
                <div 
                style={margarita}
                textContent="Margarita"
                data={["Tequila", "Triple Sec", "Sour Mix","Lime Juice"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={sexOnTheBeach}
                textContent="Sex on the Beach"
                data={["Vodka", "Peach Schnapps", "Orange Juice","Cranberry Juice"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={tequilaSunrise}
                textContent="Tequila Sunrise"
                data={["Vodka", "Grenadine", "Orange Juice"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={longIslandIcedTea}
                textContent="Long Island Iced Tea"
                data={["Gin", "Vodka", "Rum","Tequila","Triple Sec","Sour Mix","Cola"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={uptownMule}
                textContent="Uptown Mule"
                // Choice of Tequila, Vodka or Whiskey
                // Choice of Simple Syrup or Agave
                data={["Choose Liquor","Choose Simple Syrup or Agave","Lime", "Ginger Beer"]}
                onClick={((e) => logToState(e))}
                // Need to add a type of Liquor Feature and a Brand of Liquor feature
                />
                <div 
                style={amarettoSour}
                textContent="Amaretto Sour"
                data={["Amaretto", "Sour Mix", "Grenadine","Sprite"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={pinaColada}
                textContent="Pina Colada"
                data={["Rum", "Coconut Cream", "Grenadine","Pineapple Juice"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={regularCockTails}
                textContent="Regular Cocktails"
                data={["Choice of Liquor, choice of Brand"]}
                onClick={((e) => logToState(e))}
                // Add input area for drink name or ingredient list.
                />
                <div 
                style={nonAlcoholicBev}
                textContent="Mocktales [Non-Alcoholic]"
                // List of mocktales other than these
                // Input box to make your own drink with the preset tools provided to price the drink
                // House Signature Cocktails will be in a drop down labeled House Signature Cocktails
                // Regular Cocktails will be in a drop down labeled Regular Cocktails (other more known drinks will be put there as well.)
                // Make your own drink section will be available where they can click the alchole, the brand, and mixers
                // Known Mocktails drop down will be available as well. This feature will be for alcoholic and non-alcoholic options.
                data={["Gold Saucer", "Made in Heaven", "Super Sonic","Psycho Crusher","Yoshi's Island","Love is Blue","Cola"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={oneUpBucket}
                textContent="1Up Bucket"
                // Button choices for standard and premium
                data={["Standard, Premium"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={onDraft}
                textContent="Draft Beers"
                // Button choices for draft beer choices
                data={["Goose Island IPA, Shock Top","Kona Big Wave", "Stella Artois", "Blue Moon","Michelob Ultra"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={canBottle}
                textContent="Bottle/Can Beers"
                // Button choices for bottled/canned beer choices
                data={["Corona","Modelo","Heineken", "Presidente", "Stella Liberte [NON ALCOHOLIC]"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={fountainDrinks}
                textContent="Fountain Drinks"
                data={["Coke","Pepsi","Sprite","Ginger Ale"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={redBull}
                className=''
                onClick={testFunction}
                />
                <div 
                style={bigDrinks}
                textContent="Bottle/Can Beers"
                // Button choices for henny colada or gamers punch
                data={["Henny Colada","Gamer's Punch"]}
                onClick={((e) => logToState(e))}
                />
                <div 
                style={hookah}
                textContent="Hookah"
                data={["Sky Fall", "Mint", "Peach", "Blueberry"]}
                onClick={((e) => logToState(e))}
                />
                </div>
                
                <Modal show={show} onHide={handleClose} animation={false} transition={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{drink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ingredients}</Modal.Body>
                <Modal.Body>{quantity}</Modal.Body>
                <Modal.Body>{state.order.drink.price}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Go Back
                    </Button>
                    <Button variant="primary" onClick={addToCart}>
                    Add to Cart
                    </Button>
                </Modal.Footer>
                </Modal>
        </div>
  
  );
}
