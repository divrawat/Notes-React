import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) =>{
const notesInitial=[
  {
  
      "_id": "62e9283ecddf88e17e915609",
      "user": "62deaf47e46c999b44c73c92",
      "title": "My Title ohjoer ",
      "description": "My notes are here",
      "tag": "class 10 Math",
      "date": "2022-08-02T13:35:58.308Z",
      "__v": 0
    },
    {
      "_id": "62e92852cddf88e17e91560c",
      "user": "62deaf47e46c999b44c73c92",
      "title": "My Title",
      "description": "My notes are here",
      "tag": "class 10 Math",
      "date": "2022-08-02T13:36:18.361Z",
      "__v": 0
    },
  
]

const [notes, setNotes] = useState(notesInitial)

//Add Note
const addnote = (title, description, tag)=>{
 
  const note =   {
    "_id": "62e92852cddf88e17e91560c",
    "user": "62deaf47e46c999b44c73c92",
    "title": "My Title",
    "description": "My notes are here",
    "tag": "class 10 Math",
    "date": "2022-08-02T13:36:18.361Z",
    "__v": 0
  };
setNotes(notes.concat(note))
}


//Edit Note
const Editnote = ()=>{
  
}


//Delete Note
const Deletenote = ()=>{
  
}

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
          {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState