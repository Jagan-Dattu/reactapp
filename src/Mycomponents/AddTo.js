import React, { useState } from 'react';

// import React, { useState } from 'react';
export const AddTo = ({Addto}) => {
    const [title,setTitle]=useState("");
    const [desc,setdesc]=useState("");
    const onsubmit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("title or desc not filled");
        }
        else{
        Addto(title,desc);
        setTitle("");
        setdesc("");
        }
    }
  return (
    <div className='container'>
    <h3>Add to todo</h3>
    <form onSubmit={onsubmit}>
<div className="mb-3">
  <AddTo>
    <label>
      <form>
        <h1>
          
        </h1>
      </form>
    </label>
  </AddTo>
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" value={title} onChange={(e=>setTitle(e.target.value))} className="form-control" id="title" aria-describedby="emailHelp"/>
  {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
</div>
<div className="mb-3">
  <label htmlFor="task" className="form-label">task</label>
  <input type="text" value={desc} onChange={(e=>setdesc(e.target.value))} className="form-control" id="task"/>
</div>
<div>
  <div>
    <label type="text" className=''></label>
  </div>
</div>
<button type="submit" className="btn btn-primary">add to todo</button>
</form></div>
  )
}
