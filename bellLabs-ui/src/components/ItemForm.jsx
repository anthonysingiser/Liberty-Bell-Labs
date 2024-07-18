import React, { useState } from 'react';

function ItemForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem({ name, expirationDate, quantity });
    setName('');
    setExpirationDate('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Expiration Date"
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;