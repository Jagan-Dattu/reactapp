import './App.css';
import Header from './Mycomponents/Header';
import { Footer } from './Mycomponents/Footer';
import { Todos } from './Mycomponents/Todos';
import { AddTo } from './Mycomponents/AddTo';
import React, { useState, useEffect} from 'react';

function App() {
  let initodo;
  if(localStorage.getItem("todos")===null)
  {
    initodo=[];
  }
  else{
    initodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log('i am deleting',todo)
    settodos(todos.filter((e)=>{
        return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));


  }
  const Addto=(title,desc)=>{
    console.log(title,desc);
    let s;
    if(todos.length===0){
      s=0;
    }
    else{
    s=todos[todos.length-1].sno+1;
    }
    const addtodo={
      title:title,
      desc:desc,
      sno:s
    }
    settodos([...todos,addtodo]);
    console.log(addtodo);
  }
  const [todos, settodos]=useState(initodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
    <>

   <Header title="jagans todo list"  searchbar={false} />
   <AddTo Addto={Addto}/>
   <Todos todos={todos} onDelete={onDelete} />

   <Footer/>
   
    </>
  );
}
export default App;
