import React, { useState } from "react";
import NoteContext from "./NoteContext";




const NoteState = (props) => {
    const notesInitial = [

        {
            "_id": "633732c2e035912331te3b021efbb6f6",
            "user": "6335d52a4ce96fe14f2ffd27",
            "title": "my title update",
            "description": "please wake update  latee",
            "tag": "personal",
            "date": "2022-09-30T18:17:38.541Z",
            "__v": 0
        },
        {
            "_id": "6337330ee035ewq9b8546021efbb6f8",
            "user": "6335d52a4ce96fe14f2ffd27",
            "title": "my title",
            "description": "please wake up latee",
            "tag": "personal",
            "date": "2022-09-30T18:18:54.369Z",
            "__v": 0
        },
        {
            "_id": "6337330ee0359rew6324b021efbb6fa",
            "user": "6335d52a4ce96fe14f2ffd27",
            "title": "my title",
            "description": "please wake up latee",
            "tag": "personal",
            "date": "2022-09-30T18:18:54.900Z",
            "__v": 0
        },
        {
            "_id": "6337330fe03re59b2313021efbb6fc",
            "user": "6335d52a4ce96fe14f2ffd27",
            "title": "my title",
            "description": "please wake up latee",
            "tag": "personal",
            "date": "2022-09-30T18:18:55.109Z",
            "__v": 0
        },
        {
            "_id": "6337330fe03re59b6436021efbb6fc",
            "user": "6335d52a4ce96fe14f2ffd27",
            "title": "my title",
            "description": "please wake up latee",
            "tag": "personal",
            "date": "2022-09-30T18:18:55.109Z",
            "__v": 0
        },
        {
            "_id": "6337330fe03re5123249b021efbb6fc",
            "user": "6335d52a4ce96fe14f2ffd27",
            "title": "my title",
            "description": "please wake up latee",
            "tag": "personal",
            "date": "2022-09-30T18:18:55.109Z",
            "__v": 0
        },
        {
            "_id": "6337330fe037344re59b021efbb6fc",
            "user": "6335d52a4ce96fe14f2ffd27",
            "title": "my title",
            "description": "please wake up latee",
            "tag": "personal",
            "date": "2022-09-30T18:18:55.109Z",
            "__v": 0
        },
        {
            "_id": "6337330fe03r2364e59b021efbb6fc",
            "user": "6335d52a4ce96fe14f2ffd27",
            "title": "my title",
            "description": "please wake up latee",
            "tag": "personal",
            "date": "2022-09-30T18:18:55.109Z",
            "__v": 0
        },
        {
            "_id": "6337330f432e03re59b021efbb6fc",
            "user": "6335d52a4ce96fe14f2ffd27",
            "title": "my title",
            "description": "please wake up latee",
            "tag": "personal",
            "date": "2022-09-30T18:18:55.109Z",
            "__v": 0
        },
        {
            "_id": "6337330fe03re52349b021efbb6fc",
            "user": "6335d52a4ce96fe14f2ffd27",
            "title": "my title",
            "description": "please wake up latee",
            "tag": "personal",
            "date": "2022-09-30T18:18:55.109Z",
            "__v": 0
        },
        
    ]

    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes , setNotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;