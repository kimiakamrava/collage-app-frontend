import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import NoteHelper from "./NoteHelper";

function NoteList({notes, removeNote, toggleNote}) {
  return (
      <Paper>
          <List>
               {notes.map(note => (
                   <>
                  <NoteHelper 
                  id = {note.id}
                  task={note.task} 
                  key={note.id} completed={note.completed}
                  palette={note.palette}
                  removeNote={removeNote}
                  toggleNote ={toggleNote}
                   />
                  <Divider />
                  </>
                ))} 
          </List>
      </Paper>   
  );
}
export default NoteList;