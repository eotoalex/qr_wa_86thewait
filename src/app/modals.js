import React from 'react';
import { Offcanvas, Button, ListGroup, Modal } from 'react-bootstrap';

export function UserItemModal({ show, handleClose, addToCart, drink, ingredients, quantity, price }) {
  return (
    <Modal show={show} onHide={handleClose} animation={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>{drink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{ingredients}</Modal.Body>
      <Modal.Body>{quantity}</Modal.Body>
      <Modal.Body>{price}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Go Back
        </Button>
        <Button variant="primary" onClick={addToCart}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export function CartModal({ cartShow, handleCloseCart, cartItems, handleCheckout }) {
  return (
  <Offcanvas show={cartShow} onHide={handleCloseCart} placement="end">
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Your Cart</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ListGroup>
        {cartItems.map((item, index) => (
          <ListGroup.Item key={index}>
            <div><strong>{item.drink}</strong></div>
            <div>Ingredients: {item.ingredients}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Price: ${item.price}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    )}
    {cartItems.length > 0 && (
      <div className="mt-3 text-end">
        <Button variant="success" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    )}
  </Offcanvas.Body>
</Offcanvas>
  );
};

// Swipe right to see cart
// Swipe left to close out.

// Cart thumbnail should look like a shopping cart
// close out will look like a money exchanging hands.