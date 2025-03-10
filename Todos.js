import React from 'react'
import { Todositems } from './Todositems'
export const Todos = (props) => {
    // let p=props.todos[0];
    let todostyle={
        top:"10vh",
        position: "relative"
    }
  return (
    <div className='container' style={todostyle}>
        <h3 >
            todos list
        </h3>
        
        {props.todos.length===0?"no todos to display":props.todos.map((todo)=>{
        return <Todositems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
       }
      
        
        </div>
  )
}
