import React, { useState } from 'react'
import "./App.css";
import PrintTodo from './components/printtodo';

function App() {
  const [todo, setTodo] = useState([
  ])
  const [completeTodo, setCompleteTodo] = useState([

  ])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const titleInput = event => setTitle(event.target.value)
  const contentInput = event => setContent(event.target.value)

  const AddToDoBtn = function (e) {
    e.preventDefault()
    const toDos = {
      id: Date.now(),
      title,
      content
    }
    setTodo([...todo, toDos])
  }
  //map에서 돌아가는거는 분리
  const DeleteWorkingToDoBtn = function (id) {
    const workingTodo = todo.filter((todo) => todo.id !== id)
    setTodo(workingTodo)
  }

  const DeleteCompleteToDoBtn = function (id) {
    const doneTodo = completeTodo.filter((todo) => todo.id !== id)
    setCompleteTodo(doneTodo)
  }

  const CompleteToDoBtn = function (item) {
    setCompleteTodo([...completeTodo, item])
    DeleteWorkingToDoBtn(item.id)
  }

  const WokringToDoBtn = function (item) {
    setTodo([...todo, item])
    DeleteCompleteToDoBtn(item.id)

  }
  //단순히 버튼을 생성하는부분은 똑같다. 하지만  props로 받는거에 따라 달라진다.

  return (
    <div className='todo-body'>
      <header>
        todo Todo toDo ToDo
      </header>
      <form className='submit-form' onSubmit={AddToDoBtn}>
        제목 :<input onChange={titleInput} />
        내용 :<input onChange={contentInput} />
        <button onSubmit={AddToDoBtn}>추가하기</button>
      </form>
      <div >
        <span>Wokring...🔥</span>
        <ul className='todo-box'>
          {todo.map(function (item) {
            return <PrintTodo key={item.id} item={item} DeleteBtn={DeleteWorkingToDoBtn} toggleTodo={CompleteToDoBtn} btnType={"완료"} />
            // <li key={item.id} className='todo'>
            //   {item.title}<br />
            //   {item.content}
            //   <div className='btn-box'>
            //     <button onClick={() => DeleteWorkingToDoBtn(item.id)}>삭제</button>
            //     <button onClick={() => CompleteToDoBtn(item)}>완료</button>
            //   </div>
            // </li>
          })}
        </ul>

      </div>
      <div >
        <span>Done!!!🌈</span>
        <ul className='todo-box'>
          {completeTodo.map(function (item) {
            return <PrintTodo key={item.id} item={item} DeleteBtn={DeleteCompleteToDoBtn} toggleTodo={WokringToDoBtn} btnType={"취소"} />
            // <li key={item.id} className='todo'>
            //   {item.title}<br />
            //   {item.content}
            //   <button onClick={() => DeleteCompleteToDoBtn(item.id)}>삭제</button>
            //   <button onClick={() => WokringToDoBtn(item)}>취소</button>
            // </li>
          })}
        </ul>
      </div>
    </div>
  )
}
// const PrintWorkingTodo = ({ item, DeleteWorkingToDoBtn, CompleteToDoBtn }) => {
//   return <li key={item.id} className='todo'>
//     {item.title}<br />
//     {item.content}
//     <div className='btn-box'>
//       <button onClick={() => DeleteWorkingToDoBtn(item.id)}>삭제</button>
//       <button onClick={() => CompleteToDoBtn(item)}>완료</button>
//     </div>
//   </li>
// }

// const PrintCompleteTodo = ({ item, DeleteCompleteToDoBtn, WokringToDoBtn }) => {
//   return <li key={item.id} className='todo'>
//     {item.title}<br />
//     {item.content}
//     <button onClick={() => DeleteCompleteToDoBtn(item.id)}>삭제</button>
//     <button onClick={() => WokringToDoBtn(item)}>취소</button>
//   </li>
// }

export default App