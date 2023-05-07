import './style.scss';

const AddItem = ({ addItem, setAddItem, handleSubmit }) => {
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="addItemInput" className="form__label">
          Enter the task:
        </label>
        <input
          type="text"
          className="form__input"
          name="addItemInput"
          placeholder="Get groceries"
          value={addItem}
          onChange={(e) => setAddItem(e.target.value)}
        />
        <button type="submit" className="form__btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddItem;
