import React, { useState } from "react";
import "./App.css";
import PrintTodo from "./components/printtodo";

function App() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState(""); // setState는 비동기이다 => data를 받아오기전에 실행//setState안에 콜백함수릀이용하여 동기적으로 가능!
  const [content, setContent] = useState("");
  const titleInput = (event) => setTitle(event.target.value);
  const contentInput = (event) => setContent(event.target.value);

  const AddToDoBtn = function (e) {
    e.preventDefault();
    const toDos = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };
    setTodo([...todo, toDos]);
    e.target.value = "";
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
      <header>todo Todo toDo ToDo</header>
      <form className="submit-form" onSubmit={AddToDoBtn}>
        제목 :<input onChange={titleInput} />
        내용 :<input onChange={contentInput} />
        <button onSubmit={AddToDoBtn}>추가하기</button>
      </form>
      <div>
        <span>Working...🔥</span>
        <ul className="todo-box">
          <PrintTodo
            todo={todo}
            setTodo={setTodo}
            isDone={false}
            btnType={"완료"}
          />
        </ul>
      </div>
      <div>
        <span>Done!!!🌈</span>
        <ul className="todo-box">
          <PrintTodo
            todo={todo}
            setTodo={setTodo}
            isDone={true}
            btnType={"취소"}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
