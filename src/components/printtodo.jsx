import Button from "./btn";
const PrintTodo = ({ todos, setTodos, isDone, btnType }) => {
  const DeleteBtn = function (item) {
    const remainTodoList = todos.filter((todos) => todos.id !== item.id);
    setTodos(remainTodoList);
  };
  const toggleBtn = function (item) {
    if (item.isDone === false) {
      item.isDone = true;
    } else if (item.isDone === true) {
      item.isDone = false;
    }
    setTodos([...todos]);
  };
  const todoList = todos.filter(function (todos) {
    return todos.isDone === isDone;
  });

  return todoList.map(function (item) {
    return (
      <li key={item.id} className="todos">
        <span>{item.title}</span>
        <span>{item.content}</span>
        <div className="btn-box">
          <Button btnFunc={DeleteBtn} item={item}>
            삭제
          </Button>
          <Button btnFunc={toggleBtn} item={item}>
            {btnType}
          </Button>
        </div>
      </li>
    );
  });
};

export default PrintTodo;
