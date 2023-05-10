import { useEffect, useState } from 'react';
import AddItem from './components/AddItem';
import List from './components/List';

const API_BASE_URL = 'http://localhost:4000';

const App = () => {
  const [addItem, setAddItem] = useState('');
  const [items, setItems] = useState([]);

  // get data from backend fetch API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/items`);
        const data = await response.json();
        setItems(data.result.reverse());
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      id: items[0].id + 1,
      item: addItem,
    };
    setItems([newItem, ...items]);
    setAddItem('');
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    };
    try {
      await fetch(`${API_BASE_URL}/items`, postOptions);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (item) => {
    const { id } = item;
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
    try {
      await fetch(`${API_BASE_URL}/items/${id}`, { method: 'delete' });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <h1>To Do List App</h1>
      <AddItem
        addItem={addItem}
        setAddItem={setAddItem}
        handleSubmit={handleSubmit}
      />
      <List items={items} handleDelete={handleDelete} />
    </main>
  );
};

export default App;
