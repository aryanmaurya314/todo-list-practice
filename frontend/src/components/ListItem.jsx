const ListItem = ({ item, handleDelete }) => {
  return (
    <li className="list__item">
      <p>{item.item}</p>
      <button
        type="button"
        className="list__btn"
        onClick={() => handleDelete(item)}
      >
        X
      </button>
    </li>
  );
};

export default ListItem;
