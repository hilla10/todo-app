import TodoCard from './TodoCard';

const TodoList = ({
  todoList,
  selectedTab,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  const filterTodosList =
    selectedTab === 'All'
      ? todoList
      : selectedTab === 'Completed'
      ? todoList.filter((val) => val.complete)
      : todoList.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todoList.findIndex((val) => val.input === todo.input)}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
