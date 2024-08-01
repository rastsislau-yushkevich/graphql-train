const TodoItem = ({ title, completed }) => {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={completed}
        />
        {title}
      </label>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
