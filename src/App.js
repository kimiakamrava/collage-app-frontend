import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { createPalette } from "./materialHelpers";

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" render={() =><h1>sign in goes here</h1>}/>
        <Route exact path="/palette/:id" render={() =><h1>single palette</h1>}/>
        <Route exact path="/palettes" render={() =><h1>my palette</h1>}/>
        
      </Switch>
      
      // <div>
      //   <Palette palette={createPalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
