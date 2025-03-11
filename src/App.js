import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Todo from './Components/Todo';
 
function App() {
  const onDelete=(todos)=>{
    console.log("I m onDelete", todos)
  }
  let todos=[
    {
      sno: 1,
      title: "go to the market",
      desc:"you have to go to the market to gat this job done1"
    },
    {
      sno: 2,
      title: "go to the mall",
      desc:"you have to go to the market to gat this job done2"
    },
    {
      sno: 3,
      title: "go to the mela",
      desc:"you have to go to the market to gat this job done3"
    }
  ]
  return (
     <>
        <Navbar title= "My Todos List"/>
        <Todo todos={todos} onDelete={onDelete}/>
        <Footer/>
     </>
  );
}

export default App;
