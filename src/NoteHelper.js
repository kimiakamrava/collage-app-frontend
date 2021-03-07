import React from "react";
import Toggle from "./ReduxHooks/Toggle";
import NoteEdit from "./NoteEdit";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBox from "@material-ui/core/Checkbox";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function NoteHelper({task, completed, removeNote, toggleNote, id, editNote}) {
    const [editLoading, toggle] = Toggle(false);
    return (
    <ListItem style={{ height:"64px"}}>
        {editLoading ? ( 
            <NoteEdit editNote={editNote} id={id} task={task} toggle={toggle}/>
        ) : ( 
        <>
         <CheckBox  disableRipple tabIndex={-1}  checked={completed} onClick={() => toggleNote(id)} />
         <ListItemText style={{textDecoration: completed ? "Line-through": "none" }}
        >
          {task}  
    </ListItemText>
    <ListItemSecondaryAction>
        <IconButton onClick={() => removeNote(id)}><DeleteIcon/></IconButton>
        <IconButton onClick={toggle}><EditOutlinedIcon/></IconButton>
    </ListItemSecondaryAction>
    </>
    )}
   </ListItem>
   );
}

export default NoteHelper;