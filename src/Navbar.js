import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./Navbar.css"



class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { format: "hex" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({ format:e.target.value});
        this.props.handleChange(e.target.value);
    }
    render() {
        const {level, changeLevel, isAllColors } = this.props;
        const {format} = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <Link to='/palettes'>LET'S PALETTE</Link>
                    {/* <a href="link of react route">LET'S PALETTE</a> */}
                </div>
                {isAllColors && ( <div className="slider-component">
                    <div className='slider'>
                        <span>{level}</span>
                      <Slider 
                         defaultValue={level}
                         min={100} 
                         max={900}
                         step={100}
                         onAfterChange={changeLevel}
                        />
                    </div>  
                </div>
                )}
                <div className="select-container">
                  <Select value={format} onChange={this.handleChange}>
                     <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                     <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                     <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
                  </Select>
                </div> 
            </header>
        );
    }
}
export default Navbar;