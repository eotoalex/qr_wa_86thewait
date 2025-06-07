"use client";
import { useState,useEffect} from 'react';
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
  const router = useRouter();
  const state = useSelector(state => state);
  const drink = state.order.drink.drink;
  const ingredients = state.order.drink.ingredients;
  const quantity = state.order.drink.quantity;
  const dispatch = useDispatch();
  const handlePageRoutes = () => router.push('/orderPage');
  
  // User's choice of drink is sent to redux state tree.   
  const currentState = (drink,ingredients) => {
    dispatch({ type: 'DRINKORDER', payload: drink });
  };
  // This function saves the users tapped choice to the redux state tree. usersChoice  
  const usersChoice =  (e) =>  {
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
    const addToState =  currentState(orderObject)
    addToState

    return (
        handleShow () 
    )
  };
  //This functions logs the state to see whats in the users current choice and what they choose to put in the cart.   
  const testFunction = () => {
    console.log(state)
  };
  const addToCart = () => {
    // Create a visual of the cart with a delete or garbage button to remove or edit items in the cart.
     dispatch({ type: 'ADDTOCART', payload: drink });
    // Get a small modal on the top right of the screen to confirm this order of the drink.
    console.log("Your ",drink," was added to the cart successfully.")
    handleClose()
  };
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
  };
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
            textcontent="Gold Saucer"
            data={["Amarreto","Spiced Rum","Orange Juice", "Pineapple Juice","Agave","Lime Juice"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={madeInHeaven}
            textcontent="Made in Heaven"
            data={["Amarreto","Sour Mix","Grenadine", "Passion Fruit Juice","Sprite"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={superSonic}
            textcontent="Super Sonic"
            data={["Tequila", "Peach Schnapps", "Passion Fruit Juice"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={psychoCrusher}
            textcontent="Psycho Crusher"
            data={["Cognac", "Blue Curacao", "Grenadine","Sour Mix","Sprite"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={yoshiIsland}
            textcontent="Yoshi's Island"
            data={["Vodka", "Lemon Liqueur", "Sour Mix","Sour Apple","Pineapple Juice"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={loveIsBlue}
            textcontent="Love is Blue"
            data={["Rum", "Blue Curacao", "Coconut Cream","Heavy Cream","Pineapple Juice"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={mojito}
            textcontent="Mojito"
            data={["Rum", "Lime Juice", "Soda","Simple Syrup","Mint"]}
            // Need to add a flavors feature here.
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={margarita}
            textcontent="Margarita"
            data={["Tequila", "Triple Sec", "Sour Mix","Lime Juice"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={sexOnTheBeach}
            textcontent="Sex on the Beach"
            data={["Vodka", "Peach Schnapps", "Orange Juice","Cranberry Juice"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={tequilaSunrise}
            textcontent="Tequila Sunrise"
            data={["Vodka", "Grenadine", "Orange Juice"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={longIslandIcedTea}
            textcontent="Long Island Iced Tea"
            data={["Gin", "Vodka", "Rum","Tequila","Triple Sec","Sour Mix","Cola"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={uptownMule}
            textcontent="Uptown Mule"
            // Choice of Tequila, Vodka or Whiskey
            // Choice of Simple Syrup or Agave
            data={["Choose Liquor","Choose Simple Syrup or Agave","Lime", "Ginger Beer"]}
            onClick={((e) => usersChoice(e))}
            // Need to add a type of Liquor Feature and a Brand of Liquor feature
            />
            <div 
            style={amarettoSour}
            textcontent="Amaretto Sour"
            data={["Amaretto", "Sour Mix", "Grenadine","Sprite"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={pinaColada}
            textcontent="Pina Colada"
            data={["Rum", "Coconut Cream", "Grenadine","Pineapple Juice"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={regularCockTails}
            textcontent="Regular Cocktails"
            data={["Choice of Liquor, choice of Brand"]}
            onClick={((e) => usersChoice(e))}
            // Add input area for drink name or ingredient list.
            />
            <div 
            style={nonAlcoholicBev}
            textcontent="Mocktales [Non-Alcoholic]"
            // List of mocktales other than these
            // Input box to make your own drink with the preset tools provided to price the drink
            // House Signature Cocktails will be in a drop down labeled House Signature Cocktails
            // Regular Cocktails will be in a drop down labeled Regular Cocktails (other more known drinks will be put there as well.)
            // Make your own drink section will be available where they can click the alchole, the brand, and mixers
            // Known Mocktails drop down will be available as well. This feature will be for alcoholic and non-alcoholic options.
            data={["Gold Saucer", "Made in Heaven", "Super Sonic","Psycho Crusher","Yoshi's Island","Love is Blue","Cola"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={oneUpBucket}
            textcontent="1Up Bucket"
            // Button choices for standard and premium
            data={["Standard, Premium"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={onDraft}
            textcontent="Draft Beers"
            // Button choices for draft beer choices
            data={["Goose Island IPA, Shock Top","Kona Big Wave", "Stella Artois", "Blue Moon","Michelob Ultra"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={canBottle}
            textcontent="Bottle/Can Beers"
            // Button choices for bottled/canned beer choices
            data={["Corona","Modelo","Heineken", "Presidente", "Stella Liberte [NON ALCOHOLIC]"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={fountainDrinks}
            textcontent="Fountain Drinks"
            data={["Coke","Pepsi","Sprite","Ginger Ale"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={redBull}
            className=''
            onClick={testFunction}
            />
            <div 
            style={bigDrinks}
            textcontent="Bottle/Can Beers"
            // Button choices for henny colada or gamers punch
            data={["Henny Colada","Gamer's Punch"]}
            onClick={((e) => usersChoice(e))}
            />
            <div 
            style={hookah}
            textcontent="Hookah"
            data={["Sky Fall", "Mint", "Peach", "Blueberry"]}
            onClick={((e) => usersChoice(e))}
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
};
