"use client";
import React, { useState } from 'react';

export default function OrderPage() {
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order submitted with notes: ${notes}`);
    // Here you could send the data to a server or API
    setNotes(''); // Clear the form
  };

  return (
    <div style={styles.container}>
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="notes">Order Notes:</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter any notes about your order..."
          rows="5"
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Submit Order</button>
      </form>
    </div>
  );
}

// Quick inline styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '2rem auto',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textarea: {
    marginTop: '0.5rem',
    marginBottom: '1rem',
    padding: '0.5rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};