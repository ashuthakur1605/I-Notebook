import React,{useContext} from 'react'
import NoteContext from "../context/notes/NoteContext"
import Noteitem from './Noteitem';



export default function Notes() {
  const context = useContext(NoteContext)
  const {notes,setNotes} = context;
  return (
    <div className='row my-3'>
    <h1>Your Note</h1>
    {notes.map((note) => {
      return <Noteitem key={note._id} note = {note}/>
    })}</div>
  )
}


// function Notes() {
//   const context = useContext(NoteContext)
//   const {notes,setNotes} = context;
//   return (
//     <div>
//       <h1>Your Note</h1>
//       {notes.map((note) => {
//         return <Noteitem note = {note}/>
//       })}</div>
//   )
// }

// export default Notes