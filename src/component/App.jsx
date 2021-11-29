import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";


function App() {

    const [notes,setNotes]=useState([]);

    function addNote(note){
        setNotes(prevalue => {
            return [...prevalue ,note]
        });
    }

    function deleteNote(id){
        setNotes(prevalue => {
            return prevalue.filter((noteitem,index)=>{
                return index !== id;
            })
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem,index) => <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>)}
            <Footer />
        </div>
    );
}

export default App;