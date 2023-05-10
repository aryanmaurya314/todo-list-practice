import './style.scss';
import ListItem from './ListItem';

const List = ({ items, handleDelete }) => {
  return (
    <div className="list-container">
      <ul className="list">
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
