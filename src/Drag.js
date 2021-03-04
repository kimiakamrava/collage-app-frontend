import React from 'react';
import {SortableElement} from "react-sortable-hoc"; 
import{withStyles} from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";



const style = {
    drag:{
    width: "15vh",
    height: "35vh",
    margin:"0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    "&:hover svg": {
        color:"white",
        transform: "scale(1.5)"

    }
    
    },
 boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    top: "0px",
    padding: "5px",
    color: "black",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    fontSize: "10px",
    display: "flex",
    justifyContent: "space-between"
    },
    deleteIcon :{
        color: "gray",
        bottom: "0px",
        fontSize: "8px",
        transition: "all 0.3s ease-in-out"


    }

};

const Drag = SortableElement((props) => {
    const {classes, handleClick } = props;
    return(
    <div className={classes.drag} style={{backgroundColor: props.color}}>
         
        <div className={classes.boxContent}>
         <span> {props.name}</span>   
         <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
        </div>
        
    </div>
    );
});

export default withStyles(style)(Drag);