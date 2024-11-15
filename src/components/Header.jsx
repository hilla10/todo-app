const Header = ({ todoList }) => {
  const todoLength = todoList.length;

  const isTasksPlural = todoList.length !== 1;
  const taskOrTasks = isTasksPlural ? 'tasks' : 'task';

  return (
    <header>
      <h1 className='text-gradient'>
        You have {todoLength} open {taskOrTasks}.
      </h1>
    </header>
  );
};

export default Header;
