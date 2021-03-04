import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DragItems from './DragItems';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from "react-color";
import { arrayMove } from "react-sortable-hoc";

const drawerWidth = 400;
const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class CreatePalette extends Component {
    static defaultProps = {
      maxColors: 15
    };
    constructor(props) {
        super(props);
        this.state = {
          open: true,
          selectedColor: "teal",
          newName:"",
          colors: [{color: 'blue', name: "blue"}],
          newPaletteName: "",
        };
        this.updateSelectedColor = this.updateSelectedColor.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSavedPalette = this.handleSavedPalette.bind(this);
        this.deleteColor = this.deleteColor.bind(this);
        this.clearPalette = this.clearPalette.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }

    componentDidMount(){
      ValidatorForm.addValidationRule('uniqueColorName',value =>
       this.state.colors.every(
         ({name}) => name.toLowerCase() !== value.toLowerCase()
        )
      );
      ValidatorForm.addValidationRule('uniqueColor', value =>
      this.state.colors.every(
        ({color}) => color !== this.state.selectedColor
       )
     );
     ValidatorForm.addValidationRule("uniquePalette", value =>
     this.props.palettes.every(
       ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
    }
      
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateSelectedColor(newColor) {
    this.setState({ selectedColor: newColor.hex });
  }

  addNewColor() {
    const newColor={color: this.state.selectedColor, name:this.state.newName}
    this.setState({ colors: [...this.state.colors, newColor], newName:" " });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
     })
  }

  clearPalette() {
    this.setState({ colors: [] });
  }

  shuffle() {
   const allColors = this.props.palettes.map(p => p.colors).flat();
   const random = Math.floor(Math.random() * allColors.length);
   const randColor = allColors[random];
   this.setState({colors: [...this.state.colors, randColor] });
  }

  handleSavedPalette(){
    let newName = this.state.newPaletteName;
    const newPalette = {paletteName:newName, id: newName.toLowerCase().replace(/ /g, "-"), colors: this.state.colors};
    this.props.savedPalette(newPalette);
    this.props.history.push("/palettes");
  }
  deleteColor(colorName){
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    })
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };
 


  render() {
    const { classes, maxColors } = this.props;
    const { open, colors } = this.state;
    const full = colors.length >= maxColors
    return (
      <div className={classes.root}>
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
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.handleSavedPalette}>
            <TextValidator label="Palette Name" value={this.state.newPaletteName} name="newPaletteName"
            onChange={this.handleChange}
            validators={["required","uniquePalette"]}
            errorMessages={["Please Name your Palette", "Already used name"]} />
            
            <Button variant='outlined' color="gray" type="submit">Save</Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
         
          <div>
          <Button variant='text' color='gray' onClick={this.shuffle} disabled={full}>
          {full ? "Your palette is full" : "Color Suggestions"}
              
            </Button>
          </div>
          <ChromePicker
            color={this.state.selectedColor}
            onChangeComplete={this.updateSelectedColor}
         />
         
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator value={this.state.newName} name='newName' onChange={this.handleChange}
            validators={["required", "uniqueColorName","uniqueColor"]}
            errorMessages={["this section is required!", "oops you already took that name!","oops you already took that color!"]}/>
            <Button
            variant='outlined'
            type="submit"
            color='gray'
            disabled={full}
          >
            {full ? "Your palette is full" : "Select"}
          </Button>
          </ValidatorForm>
           
          <Button variant='outlined' color='gray' onClick={this.clearPalette}>
              Clear
            </Button>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DragItems colors={this.state.colors} deleteColor={this.deleteColor} axis='xy' onSortEnd={this.onSortEnd}/>
      
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(CreatePalette);
        


