import React, {useState} from "react";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import App from "./App";


function Note(){
    const initialNotes = [
        {id: 1, task: "study FaceBook Palette", completed: false},
        {id: 2, task: "suggestions pinterest palette", completed: true},
        {id: 3, task: " pinterest palette red", completed: false},
     ]
    const [notes, setNotes] = useState(initialNotes);
    const addNote = newNoteText => {
        setNotes([...notes, {id: 4, task: newNoteText, completed: false}])
    }
    return (
        <Paper
          style={{
              padding: 0,
              margin: 0,
              height: "100vh",
              backgroundColor: "#fafafa"
          }}
          elevation={0}
        >
            <AppBar color='default' position='static' style={{ height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>MY NOTES</Typography>
                </Toolbar>
            </AppBar>
            <NoteForm addNote={addNote}/>
            <NoteList notes={notes} />
        </Paper>
    );
}

export default Note;


