import React from 'react'

const NoteItem = (props) => {
    const {note}=props;
  return (
    
     <div className="col-md-3">
     <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <div className="d-flex flex-row-reverse">
    <img src="Remove.png" height="30px" width="30px" alt="" className='mx-1'  />
    <img src="Edit.png" height="26px" width="26px" alt="" className='mx-1' />
    </div>
    </div>
    
  </div>
</div>


    
  )
}

export default NoteItem