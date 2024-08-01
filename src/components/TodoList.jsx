import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = [];

  return (
    <>
      <div>Todo list</div>
      {todos.map((todo) => {
        <TodoItem
          key={todo.id}
          {...todo}
        />;
      })}
    </>
  );
};

export default TodoList;
