import React from 'react'

export const Todositems = ({todo,onDelete}) => {
  return (
    <div>
        <h4>
            {todo.title}
        </h4>
       <p>
        {todo.task}
       </p>
       
       <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}} >delete
       </button>
    
        </div>
  )
}
