const PrintTodo = ({ item, DeleteBtn, toggleTodo, btnType }) => {
  return (
    <li key={item.id} className="todo">
      {item.title}
      <br />
      {item.content}
      <div className="btn-box">
        <button onClick={() => DeleteBtn(item.id)}>삭제</button>
        <button onClick={() => toggleTodo(item)}>{btnType}</button>
      </div>
    </li>
  );
};

export default PrintTodo;
