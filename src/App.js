import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import Todo from './Components/Todo';
import { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I m onDelete", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [alert, setAlert] = useState(null);
  const [todos, setTodos] = useState([]);
  let sno
const addTodo=(title, desc)=>{
  console.log("I m adding this todo",title,desc)
  if(todos.length===0){
    sno=0
    }
    else{
      sno=todos[todos.length-1].sno+1
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo])
}

  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      setAlert("⚠️ Title or Discription cannot be blank");
      setTimeout(() => {
        setAlert(null)
      }, 1500);
      return;

    }
    addTodo(title,desc)

    setAlert(null);

  };






  return (
    <>
      <Navbar title="My Todos List" />

      {/* Show alert if it's set */}
     <div style={{ height: "50px" }}> {alert && <div className="alert alert-warning" >{alert}</div>}</div>

      <AddTodo submit={submit} title={title} desc={desc} setDesc={setDesc} setTitle={setTitle} />
      <Todo todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
