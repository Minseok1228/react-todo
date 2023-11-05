import Button from "./btn";
const PrintTodo = ({ todo, setTodo, isDone, btnType }) => {
  const DeleteBtn = function (item) {
    const remainTodoList = todo.filter((todo) => todo.id !== item.id);
    setTodo(remainTodoList);
  };
  const toggleBtn = function (item) {
    if (item.isDone === false) {
      item.isDone = true;
    } else if (item.isDone === true) {
      item.isDone = false;
    }
    setTodo([...todo]);
  };
  const todoList = todo.filter(function (todo) {
    return todo.isDone === isDone;
  });

  return todoList.map(function (item) {
    return (
      <li key={item.id} className="todo">
        {item.title}
        <br />
        {item.content}
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
