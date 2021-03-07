import React, {useState} from "react";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from 'uuid';
import App from "./App";


function Note(){
    const initialNotes = [
        {id: 1, task: "study FaceBook Palette", completed: false},
        {id: 2, task: "suggestions pinterest palette", completed: true},
        {id: 3, task: " pinterest palette red", completed: false},
     ]
    const [notes, setNotes] = useState(initialNotes);
    const addNote = newNoteText => {
        setNotes([...notes, {id: uuidv4(), task: newNoteText, completed: false}])
    };
    const removeNote = noteId => {
       const updatedNotes = notes.filter(note => note.id !== noteId );
       setNotes(updatedNotes);
    };
    const toggleNote = noteId => {
        const updatedNotes = notes.map(note =>
            note.id === noteId ? {...note, completed: !note.completed}: note
        );
        setNotes(updatedNotes);
    }
    return (
        <Paper
          style={{
              padding: 0,
              margin: 0,
              height: "100vh",
              backgroundColor: "black"
          }}
          elevation={0}
        >
            <AppBar color='default' position='static' style={{ height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>MY NOTES</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop:"1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
              <NoteForm addNote={addNote}/>
              <NoteList notes={notes} removeNote={removeNote} toggleNote={toggleNote} />
              </Grid>
            </Grid>
        </Paper>
    );
}

export default Note;


