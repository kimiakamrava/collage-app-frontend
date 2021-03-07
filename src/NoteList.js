import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import NoteHelper from "./NoteHelper";

function NoteList(props) {
  return (
      <Paper>
          <List>
               {props.notes.map(note => (
                   <>
                  <NoteHelper task={note.task} key={note.id} completed={note.completed} palette={note.palette}/>
                  <Divider />
                  </>
                ))} 
          </List>
      </Paper>   
  );
}
export default NoteList;