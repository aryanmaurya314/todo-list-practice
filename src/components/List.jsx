import './style.scss';
import ListItem from './ListItem';

const List = ({ items }) => {
  return (
    <div className="list-container">
      <ul className="list">
        {items.map((item) => (
          <ListItem key={item.id} item={item.item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
