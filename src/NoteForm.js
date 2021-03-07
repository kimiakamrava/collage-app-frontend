import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./ReduxHooks/useInputState";

function NoteForm({addNote}){
    const [value, handleChange, reset] = useInputState("");
    return(
        <Paper style={{margin: "2rem 0", padding: "0 1rem"}}>
          <form 
             onSubmit={e => {
                 e.preventDefault();
                 addNote(value);
                 reset();
              }}
            >
             <TextField value={value} onChange={handleChange} margin="normal" label="Add New Note" fullWidth/>
         </form>
        </Paper>
    )
}
export default NoteForm;