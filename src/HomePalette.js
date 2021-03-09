import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from "@material-ui/icons/Delete";
import { render } from '@testing-library/react';

const style = {
    root:{
      backgroundColor: "white",
      border: "2px solid gray",
      borderRadius:"5px",
      padding:"0.5rem",
      position: "relative",
      overflow: "hidden",
      "&:hover svg": {
          opacity: 1,
          
        }

    },
    colors: {
      backgroundColor: "white",
      height:"50px",
      width: "100%",
      borderRadius: "5px" ,
      overFlow: "hidden",
    },
    images: {
      display:"flex"
    },
    title:{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0",
      color: "gray",
      paddingTop: "0.5rem",
      fontSize: "0.75rem",
      position: "relative",
      borderLine:"1px",
      borderRadius:"3%",
      borderColor: "black",
    },
    lilColor:{
        height:"60%",
        width:"6%",
        display: "inline-block",
        margin:"0 auto",
        position: "relative",
        marginBottom:"-2px",
        borderRadius:"hidden",
    },

    delete:{

    },

    deleteIcon: {
      color: "gray",
      width: "12px",
      height: "12px",
      position: "absolute",
      right: "0px",
      bottom:  "0px",
      padding: "10px",
      zIndex: 8,
      opacity: 0,
      
      
    },
};

class HomePalette extends Component {
  constructor(props){
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
  };
  deletePalette(e){
    e.stopPropagation();
    this.props.handleDeletePalette(this.props.id);
  }
   
    render(){
      const {classes, paletteName, colors, handleClick} = this.props;
      const lilColorGrid = colors.map(color => (
          <div className={classes.lilColor}
           style={{backgroundColor: color.color}}
           key={color.name}
          />
      ));
    return (
        <div className={classes.root} onClick={handleClick}>
        <div className={classes.colors}>
        {lilColorGrid}
        </div>    
        <h5 className={classes.title}>{paletteName}
        </h5>
        
          <DeleteIcon className={classes.deleteIcon} 
          onClick={this.deletePalette}/>
        </div>   
      );
  };
}

export default withStyles(style)(HomePalette);