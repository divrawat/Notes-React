import React from 'react'
import { useContext } from 'react';
import NoteContext from "../context/notes/NoteContext";
import NoteItem from './NoteItem';
import Addnote from './Addnote';

const Notes = () => {
    const context= useContext(NoteContext);
  const {notes,addnote} = context;
  return (
    <>
   <Addnote/>
    <div className="mx-sm-5">
    <div className="row my-4">
    <h1>Your Notes</h1>
    {notes.map((note)=>{
  return <NoteItem note={note}/>
    })}
 </div>
 </div>
</>
  )
}

export default Notes