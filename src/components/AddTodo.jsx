import { useState } from 'react';

const AddTodo = () => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {};

  return (
    <form>
      <input
        type='text'
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </form>
  );
};

export default AddTodo;
