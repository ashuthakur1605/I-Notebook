import React,{useContext, useState} from 'react'
import NoteContext from "../context/notes/NoteContext"
export default function AddNote(props) {
    const context = useContext(NoteContext)
    const {addNote} = context;

    const [note, setNote]= useState({title:"",description:"",tag:""})
    const handleclick=(e)=>{
        e.preventDefault();
        
        addNote(note.title, note.description, note.tag);
        setNote({title:"",description:"",tag:""})
        props.showAlert("Added successfully", "success")


    }
    const onChange =(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className='container my-3'>

      <h1>
        Add Note
      </h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} value={note.title} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" onChange={onChange} value={note.description} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={note.tag} minLength={5} required />
        </div>
      
        <button disabled ={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
      </form>
    </div>
  )
}
