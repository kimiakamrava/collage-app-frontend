import React from 'react';
import { withStyles } from '@material-ui/styles';

const style = {
    root:{
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius:"5px",
      padding:"0.5rem",
      position: "relative",
      overflow: "hidden",
      "&:hover": {
          cursor: "pointer"
        }
    },
    colors: {
      backgroundColor: "grey",
    },
    images: {
      display:"flex"
    },
    title:{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0",
      color: "black",
      paddingTop: "0.5rem",
      fontSize: "1rem",
      position: "relative",
    },
};

function HomePalette(props) {
    const {classes, paletteName} = props;
    return (
        <div className={classes.root}>
        <div className={classes.colors}></div>    
        <h5 className={classes.title}>{paletteName}</h5>
        </div>
    )
}

export default withStyles(style)(HomePalette);