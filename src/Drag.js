import React from 'react';
import{withStyles} from "@material-ui/styles";

const style = {
    drag:{
    width: "15vh",
    height: "35vh",
    margin:"0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    
    }

};

function Drag(props){
    return<div className={props.classes.drag} style={{backgroundColor: props.color}}>{props.name}</div>
}

export default withStyles(style)(Drag)