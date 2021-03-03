import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Palette from "./Palette";
import PaletteAll from "./PaletteAll";
import ColorShadePalette from "./ColorShadePalette";
import seedColors from "./seedColors";
import CreatePalette from "./CreatePalette";
import Login from "./Login";
import Signup from "./Signup";
import { createPalette } from "./materialHelpers";
import api from './api';

class App extends Component {
  state = { auth: { currentUser: {} } };

  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      api.auth.getCurrentUser().then((user) => {
        const currentUser = { currentUser: user };

        this.setState({ auth: currentUser });
      });
    }
  }

  handleLogin = (user) => {
    const currentUser = { currentUser: user };
    localStorage.setItem('token', user.token);

    this.setState({ auth: currentUser });
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ auth: { currentUser: {} } });
  };

  findPalette(id){
   return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() =><h1>welcome</h1>}/>
        <Route
            path="/login"
            render={(routerProps) => {
              return <Login {...routerProps} handleLogin={this.handleLogin} />;
            }}
         />
        <Route exact path="/Signup" render={() => <Signup/>}/>
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
