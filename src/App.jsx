import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import PrintTodo from "./components/printtodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트",
      content: "개인과제 완성하기",
      isDone: false,
    },
    {
      id: 2,
      title: "자바스크립트",
      content: "강의 복습하기",
      isDone: false,
    },
    {
      id: 3,
      title: "TIL",
      content: "작성하기",
      isDone: true,
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleInput = (event) => setTitle(event.target.value);
  const contentInput = (event) => setContent(event.target.value);

  const AddToDoBtn = function (e) {
    e.preventDefault();
    const toDo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, toDo]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="todo-body">
      <header>
        <h1>todo Todo toDo ToDo</h1>
        <form className="submit-form" onSubmit={AddToDoBtn}>
          제목 :<input value={title} onChange={titleInput} required />
          내용 :<input value={content} onChange={contentInput} required />
          <button onSubmit={AddToDoBtn}>추가하기</button>
        </form>
      </header>
      <div>
        <p className="todo-state"> Working...🔥</p>
        <ul className="todo-box">
          <PrintTodo
            todos={todos}
            setTodos={setTodos}
            isDone={false}
            btnType={"완료"}
          />
        </ul>
      </div>
      <div>
        <p className="todo-state">Done!!!🌈</p>
        <ul className="todo-box">
          <PrintTodo
            todos={todos}
            setTodos={setTodos}
            isDone={true}
            btnType={"취소"}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
