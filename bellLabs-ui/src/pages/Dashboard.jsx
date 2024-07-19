import React, { useState } from 'react';
import ItemForm from '@/ItemForm.jsx';
import ItemList from '@/ItemList.jsx';

function Dashboard() {
  const [items, setItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItems = (selectedIndices) => {
    setItems((prevItems) =>
      prevItems.filter((_, index) => !selectedIndices.includes(index))
    );
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="app-container">
      <ItemList items={items} onRemoveItems={handleRemoveItems} />
      <button onClick={toggleFormVisibility}>Toggle Add Item</button>
      {isFormVisible && <ItemForm onAddItem={handleAddItem} />}
    </div>
  );
}

export default Dashboard;

/* 
categories: 
    -fruits/vegetables
    -meat/fish/seafood
    -dairy/alternatives
    -grains
    -frozen
    -canned
*/