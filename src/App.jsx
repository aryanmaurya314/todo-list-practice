import { useEffect, useState } from 'react';
import AddItem from './components/AddItem';
import List from './components/List';

const App = () => {
  const [addItem, setAddItem] = useState('');
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  );

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(items));
  }, [items]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      id: items.length ? items[0].id + 1 : 1,
      item: addItem,
    };
    const updatedList = [newItem, ...items];
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
