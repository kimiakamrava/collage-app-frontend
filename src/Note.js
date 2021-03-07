import React, {useState, useEffect} from "react";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import PaletteTwoToneIcon from '@material-ui/icons/PaletteTwoTone';
import { v4 as uuidv4 } from 'uuid';
import App from "./App";
import { Link } from "react-router-dom";



function Note(){
    const initialNotes = JSON.parse(window.localStorage.getItem('notes') || "[]");
   
    const [notes, setNotes] = useState(initialNotes);
    useEffect(() => {
       window.localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
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
    };
    const editNote = (noteId, newTask) => {
        const updatedNotes = notes.map(note =>
            note.id === noteId ? {...note, task: newTask } : note
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
            <AppBar color='default' position='static' style={{
                 marginBottom:"1rem",
                 display: "flex",
                 borderRadius: "2vh",
                 alignItems: "center",
                 height: "8vh",
                 fontSize: "7px",
                 width : "91%",
                 flexWrap: "wrap",
                 justifyContent: "center",
                 padding: "0 13px",
                 justifyContent: "space-between",
                backgroundColor: "black",
                 color: "white",
                 textDecoration: "none",
               
                
                }}>
                <Toolbar>
                    <Typography color='inherit'>PALETTE NOTES</Typography>
                    <Link to='/palettes'><PaletteTwoToneIcon/></Link>
                    {/* <a href="link of react route">LET'S PALETTE</a> */}
                
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop:"1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
              <NoteForm addNote={addNote}/>
              <NoteList notes={notes} removeNote={removeNote} toggleNote={toggleNote} editNote={editNote} />
              </Grid>
            </Grid>
        </Paper>
    );
}

export default Note;


