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
  const [title, setTitle] = useState(""); // setState는 비동기이다 => data를 받아오기전에 실행//setState안에 콜백함수릀이용하여 동기적으로 가능!
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

  //togglebtn은 isdone상태를 바꿔준다.!
  //isdone을 바꿔서 setTodo
  //토글 btn 이들어가면서 작동은 한ㄷㅏ=>setTodo를 함수가아니라 토글로 리턴한무어나ㅣ검ㄴㅇ래ㅔㅑㅁ언랴ㅐㅔ먼ㅇ
  // const toggleBtn = function (item) {
  //   // let toggleObj = item; //이걸 냅따 던지면 기존 todo가 사라지지 않아서 고장난다아아아
  //   // function aaa(item) {
  //   if (item.isDone === false) {
  //     item.isDone = true;
  //     // return (toggleObj = item);
  //   } else if (item.isDone === true) {
  //     item.isDone = false;
  //     // return (toggleObj = item);
  //   }
  //   // }
  //   setTodo([...todo]); //zㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ ,.....  왜 굳이 더 넣으려 했냐? 그냥 한번 풀었다가 묶으면 되는것을....
  // };

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
