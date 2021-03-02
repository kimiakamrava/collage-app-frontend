import React, { Component } from 'react';
import HomePalette from './HomePalette';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/styles';

const style = {
    root: {
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        alignItems:"flex-start",
        justifyContent: "center",
        
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection : "column",
        flexWrap: "wrap",
        justifyContent: "center",
        fontSize: "8px"
        
    },
    nav: {
        display: "flex",
        alignItems: "center",
        height: "6vh",
        fontSize: "7px",
        width : "100%",
        justifyContent: "space-between",
        color: "gray", 
        "& a": {
            color: "Black",
            fontSize : "7px",
            textDecoration: "none",
        }  
    },
    palettes:{
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns:"repeat(2, 45%)",
      gridGap: "2%",
      fontSize: "8px",
    }
};

class PaletteAll extends Component {
    openPalette(id) {
    this.props.history.push(`/palette/${id}`);    
    }
    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                     <h1>My Palettes</h1>
                     <Link to='/palette/new'>Create your Palette</Link>
                    </nav>
                   <div className={classes.palettes}>  
                     {palettes.map(palette => (
                       <HomePalette {...palette} handleClick={() => this.openPalette(palette.id)} />
                    ))}  
                    </div> 
                </div>
            </div>
        );
    }
}

export default withStyles(style)(PaletteAll);