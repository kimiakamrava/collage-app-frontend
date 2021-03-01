import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteAll from "./PaletteAll";
import seedColors from "./seedColors";
import { createPalette } from "./materialHelpers";

class App extends Component {
  findPalette(id){
   return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() =><h1>sign in goes here</h1>}/>
        <Route exact path="/palettes" render={routeProps => ( <PaletteAll palettes={seedColors} {...routeProps} /> )}/>
        <Route exact path="/palette/:id"
         render={routeProps => (
         <Palette 
         palette={createPalette
          (this.findPalette(routeProps.match.params.id)
          )} />
        )}/>
        <Route exact path="/palette/:id/:colorId" render={() => <h1>Single color</h1>} />
        
        
      </Switch>
      
      // <div>
      //   <Palette palette={createPalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
