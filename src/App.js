import React, { Component } from 'react';
import Palette from "./Palette";
import seedColors from "./seedColors";
import { createPalette } from "./materialHelpers";

class App extends Component {
  render() {
    console.log(createPalette(seedColors[4]))
    return(
      <div>
        <Palette {...seedColors[4]} />
      </div>
    )
  }
}

export default App;
