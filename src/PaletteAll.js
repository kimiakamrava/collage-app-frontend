import React, { Component } from 'react';
import HomePalette from './HomePalette';
import { Link, withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import api from './api';
import seedColors from "./seedColors";


const style = {
    root: {
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        alignItems:"flex-start",
        justifyContent: "center",
        
    },
    container: {
        width: "60%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection : "column",
        flexWrap: "wrap",
        justifyContent: "center",
        fontSize: "8px"
        
    },
    nav: {
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
        "& a": {
            color: "white",
            fontSize : "7px",
            textDecoration: "none",
        }  
    },
    palettes:{
      
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns:"repeat(3, 30%)",
      gridGap: "2%",
      fontSize: "8px",
    }
};

class PaletteAll extends Component {

      
    
    openPalette(id) {
    this.props.history.push(`/palette/${id}`);    
    }
  
    handleLogout = () => {
        localStorage.removeItem('token');
        this.setState({ auth: { currentUser: {} } });
    };
    
    
   
    render() {
        const loggedIn = !!this.props.user;
        const { palettes, classes, deletePalette } = this.props;
        
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                    <h1>My Palettes</h1>
                    {/* <link to = '/'>Palettes Notes</link> */}
                    <Link to='/palette/new'>Create your Palette</Link>
                    <Link to='/palette/note'>palette notes</Link>
                   
                    {loggedIn ? (
                      <div className="item">
                        {`Welcome ${this.props.user["currentUser"]["user"]["username"]}`}
                       </div>
                    ) : null}
                   {loggedIn ? (
                       <a
                            onClick={() => {
                             this.props.history.push('/login');
                             this.props.handleLogout();
                            }}
                            className="item"
                        >
                    <div className="ui primary button">Log Out</div>
                </a>
                ) : (
                 <Link to="/login" className="item">
                     <div className="ui primary button">Log In</div>
                 </Link>
                 
                )}   
                    </nav>
                    
                   <div className={classes.palettes}>  
                     {palettes.map(palette => (
                       <HomePalette {...palette} handleClick={() => this.openPalette(palette.id)}
                       handleDeletePalette={deletePalette} key={palette.id} id={palette.id} 
                       />
                    ))}  
                    </div> 
                </div>
            </div>
        );
    }
}

export default withStyles(style)(PaletteAll);