import React from 'react'
import NoteContext from "../context/notes/NoteContext";
import { useContext } from 'react';
import { useState } from 'react';



const Addnote = () => {
    const context= useContext(NoteContext);
    const {addnote} = context;

 const [note, setNote] = useState({title:"",description:"",tag:"Default"})


 const handleClick = (e) => {
    e.preventDefault(); 
    addnote(note.title, note.description, note.tag);
}


const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
}

  return (
    
    <div className="container my-2">
    <h1>Add Notes</h1>
    <form className="my-3">
  <div className="form-group ">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" className="form-control" onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group my-2">
    <label for="exampleInputPassword1">Description</label>
    <input type="password" className="form-control" id="description" name="description" placeholder="Password" onChange={onchange}/>
  </div>
  <div className="form-check my-2">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
</div>
  )
}

export default Addnote