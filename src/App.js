import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteAll from "./PaletteAll";
import ColorShadePalette from "./ColorShadePalette";
import seedColors from "./seedColors";
import CreatePalette from "./CreatePalette";
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
        <Route exact path="/palette/new" render={() => <CreatePalette/>}/>
        <Route exact path="/palettes" render={routeProps => ( <PaletteAll palettes={seedColors} {...routeProps} /> )}/>
        <Route exact path="/palette/:id"
         render={routeProps => (
         <Palette 
         palette={createPalette
          (this.findPalette(routeProps.match.params.id)
          )} />
        )}/>
        <Route exact path='/palette/:paletteId/:colorId' 
        render={routeProps => (
          <ColorShadePalette
          colorId={routeProps.match.params.colorId}
          palette={createPalette
           (this.findPalette(routeProps.match.params.paletteId)
          )} 
         />
        )}
        />
      </Switch>
    );
  };
};

export default App;
