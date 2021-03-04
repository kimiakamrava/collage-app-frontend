import React, { Component } from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class CreateNav extends Component {
    constructor(props){
        super(props);
        this.state = { newPaletteName: "" };
        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount() {
        ValidatorForm.addValidationRule("uniquePalette", value =>
        this.props.palettes.every(
          ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
         )
       );
    }
    
    handleChange(e) {
       this.setState({
         [e.target.name]: e.target.value
       });
    }

    render() {
        const {classes, open } = this.props;
        const {newPaletteName} = this.state
        return (
            <div>
             <CssBaseline />
                <AppBar
                position='fixed'
                color='default'
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open
                })}
                >
                <Toolbar disableGutters={!open}>
                    <IconButton
                    color='inherit'
                    aria-label='Open drawer'
                    onClick={this.props.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit' noWrap>
                    Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={() => this.props.handleSavedPalette(newPaletteName)}>
                    <TextValidator label="Palette Name" value={this.state.newPaletteName} name="newPaletteName"
                    onChange={this.handleChange}
                    validators={["required","uniquePalette"]}
                    errorMessages={["Please Name your Palette", "Already used name"]} />
                    
                    <Button variant='outlined' color="gray" type="submit">Save</Button>
                    <Link to="/palettes"><Button variant="outlined"  color="gray">LET'S PALETTE</Button></Link>
                    </ValidatorForm>
                </Toolbar>
                </AppBar>
                        
                
            </div>
        );
    }
}

export default CreateNav;