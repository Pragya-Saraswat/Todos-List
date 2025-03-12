import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import About from './Components/About';
import Todo from './Components/Todo';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [alert, setAlert] = useState(null);

  const onDelete = (todo) => {
    console.log("I am deleting", todo);
    const newTodos = todos.filter((e) => e !== todo);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodo = (title, desc) => {
    console.log("Adding todo:", title, desc);
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };

    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      setAlert("⚠️ Title or Description cannot be blank");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
      return;
    }

    addTodo(title, desc);
    setTitle("");
    setDesc("");
    setAlert(null);
  };

  return (
    <>
      <Router>
        <Navbar title="My Todos List" />
        <div style={{ height: "50px" }}>
          {alert && <div className="alert alert-warning">{alert}</div>}
        </div>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo submit={submit} title={title} desc={desc} setDesc={setDesc} setTitle={setTitle} />
                <Todo todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
