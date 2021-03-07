import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./ReduxHooks/useInputState";


function NoteEdit({ id, editNote, task, toggle}) {
    const [value, handleChange, reset] = useInputState(task);
    return ( 
    <form 
        onSubmit={(e) => {
         e.preventDefault(); 
         editNote(id, value);
         reset();
         toggle();
        }}
        style ={{marginLeft: "1rem", width:"80%"}}
        
        > 
        <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
        </form>
    );
}
export default NoteEdit;