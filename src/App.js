import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Palette from "./Palette";
import Note from "./Note";
import Painting from './Painting';
import PaletteAll from "./PaletteAll";
import ColorShadePalette from "./ColorShadePalette";
import seedColors from "./seedColors";
import WebTest from "./WebTest";
import SvgTest from './SvgTest';
import CreatePalette from "./CreatePalette";
import Welcome from "./Welcome";
import Login from "./Login";
import {SignupForm} from "./Login/index";
import { LoginForm } from "./Login/index";
import { createPalette } from "./materialHelpers";
import api from './api';






class App extends Component {
  constructor(props){
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {palettes: savedPalettes || seedColors };

    this.savedPalette = this.savedPalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    
  }
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
    console.log(user)
  };

  

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ auth: { currentUser: {} } });
  };


  findPalette(id){
   return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }
  deletePalette(id){
   this.setState(
     state => ({palettes: state.palettes.filter(palette => palette.id !== id)}),
     this.syncLocalStorage
   )
  }

  savedPalette(newPalette){
    this.setState(
      {palettes: [...this.state.palettes, newPalette]},
      this.syncLocalStorage
      );
    //   fetch(`${API_ROOT }/palettes`,{
    //     method: 'POST',
    //     headers : headers, 
    //     body: JSON.stringify(newPalette)
    //   })
    // //   .then(res => res.json())
    // //   .then(campground => createCampgroundBook(campground, roadtrip))
}


  syncLocalStorage(){
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    return (
      
      <Switch>
        <Route exact path="/" render={() => <Welcome/>}/>
        

         <Route
            path="/login"
            render={(routerProps) => {
              return <LoginForm {...routerProps} handleLogin={this.handleLogin} />;
            }}
         /> 
        <Route exact path="/Signup" render={(routerProps) => <SignupForm {...routerProps} handleLogin={this.handleLogin}/>}/>
        <Route exact path="/palette/new" render={(routeProps) => <CreatePalette savedPalette={this.savedPalette} palettes={this.state.palettes} {...routeProps}/>}/>
        <Route exact path='/palette/note' render={() => <Note />}/>
        <Route exact path='/palette/painting' render={() => <Painting />}/>
        <Route exact path='/palette/test' render={() => <WebTest />}/>
        <Route exact path='/palette/svg' render={() => <SvgTest />}/>

        <Route exact path="/palettes" render={routeProps => ( <PaletteAll palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} user={this.state.auth} handleLogout={this.handleLogout}  /> )}/>
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
        <Route 
            render={(routerProps) => {
              return <Login {...routerProps} handleLogin={this.handleLogin} />;
            }}
         />
      </Switch>
    );
  };
};

export default App;
