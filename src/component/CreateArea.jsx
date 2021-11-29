import React,{useState} from "react";

function CreateArea(prop) {
    const [note,setNote]=useState({
        title:"",
        content:""
    });

    function handler(event){
        const {name,value}=event.target;
        setNote(pervalue=> {
            return {
                ...pervalue,
                [name]:value
            }
        });
        
    }

    function submitNote(event){
        prop.onAdd(note);
        event.preventDefault();
        setNote({
            title:"",
            content:""
        });
    }

    return (
        <div>
            <form>
                <input onChange={handler} name="title" placeholder="Title" value={note.title} />
                <textarea onChange={handler} name="content" placeholder="Take a note..." rows="3" value={note.content} />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
