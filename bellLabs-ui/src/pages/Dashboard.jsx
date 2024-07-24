import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';

function Dashboard() {
  const [items, setItems] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/items')
      .then(response => setItems(response.data))
      .catch(error => {
        console.error('Error fetching items:', error);
        setError('Error fetching items');
      });
  }, []);

  const handleAddItem = (item) => {
    axios.post('/api/items', item)
      .then(response => setItems([...items, response.data]))
      .catch(error => {
        console.error('Error adding item:', error);
        setError('Error adding item');
      });
  };

  const handleRemoveItems = (selectedIndices) => {
    const idsToDelete = selectedIndices.map(index => items[index].id);
    axios.delete('/api/items', { data: idsToDelete })
      .then(() => setItems(items.filter((_, index) => !selectedIndices.includes(index))))
      .catch(error => {
        console.error('Error deleting items:', error);
        setError('Error deleting items');
      });
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="app-container">
      {error && <div className="error">{error}</div>}
      <ItemList items={items} onRemoveItems={handleRemoveItems} />
      <button onClick={toggleFormVisibility}>Toggle Add Item</button>
      {isFormVisible && <ItemForm onAddItem={handleAddItem} />}
    </div>
  );
}

export default Dashboard;