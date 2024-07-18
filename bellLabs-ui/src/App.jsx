import React, { useState } from 'react';
import ItemForm from '@/ItemForm.jsx';
import ItemList from '@/ItemList.jsx';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItems = (selectedIndices) => {
    setItems((prevItems) =>
      prevItems.filter((_, index) => !selectedIndices.includes(index))
    );
  };

  return (
    <>
      <ItemForm onAddItem={handleAddItem} />
      <ItemList items={items} onRemoveItems={handleRemoveItems} />
    </>
  );
}

export default App;