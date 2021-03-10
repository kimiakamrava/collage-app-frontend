import React, { Component } from 'react';


class Welcome extends Component {
    render() {
        return (
            <div>
              <div className="about"></div>
              <div className="container">  
              <div className="font"><h1>MIDNIGHT PALETTES</h1></div> 
              <div className="font"><h2>create your color palettes with a Private tour of Met museum</h2></div> 
              <img src='https://assets.returnonart.com/artworks/happy-eyes-never-lie.jpg'/>
              </div>
            </div>
        );
    }
}

export default Welcome;