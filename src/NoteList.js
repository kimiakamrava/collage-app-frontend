import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import NoteHelper from "./NoteHelper";

function NoteList({notes, removeNote, toggleNote, editNote}) {
  if(notes.length)
  return (
      <Paper>
          <List>
               {notes.map((note, index) => (
                   <>
                  <NoteHelper 
                  id = {note.id}
                  task={note.task} 
                  key={note.id} completed={note.completed}
                  palette={note.palette}
                  removeNote={removeNote}
                  toggleNote ={toggleNote}
                  editNote = {editNote}
                   />
                  {index < note.length - 1 && <Divider />}
                  </>
                ))}
          </List>
      </Paper>   
  );
  return null;
}
export default NoteList;