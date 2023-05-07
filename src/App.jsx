import { useState } from 'react';
import AddItem from './components/AddItem';
import List from './components/List';

const App = () => {
  const [addItem, setAddItem] = useState('');
  const [items, setItems] = useState([
    { id: 1, item: 'Milk' },
    { id: 2, item: 'Bread' },
    { id: 3, item: 'Butter' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: items[items.length - 1].id + 1,
      item: addItem,
    };

    const updatedList = [...items, newItem];
    setItems(updatedList);
    setAddItem('');
  };

  return (
    <main>
      <h1>To Do List App</h1>
      <AddItem
        addItem={addItem}
        setAddItem={setAddItem}
        handleSubmit={handleSubmit}
      />
      <List items={items} />
    </main>
  );
};

export default App;
