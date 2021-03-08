import React, { Component } from 'react';
import PaletteBox from "./PaletteBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Palette.css";
import EventNoteIcon from '@material-ui/icons/EventNote';
import { Link } from "react-router-dom";




 class Palette extends Component {
     constructor(props) {
         super(props);
         this.state = { level: 500, format:"hex"};
         this.changeLevel = this.changeLevel.bind(this);
         this.changeFormat = this.changeFormat.bind(this);
        }
        changeLevel(level) {
         this.setState({ level });
        }
        changeFormat(value) {
         this.setState({ format: value });
        }
        goToPaletteNote(id){
            this.props.history.push()
        }
    render() {
        const { colors, paletteName, id } =this.props.palette;
        const { level, format }  =this.state
        const paletteBoxes = colors[level].map(color =>(
            <PaletteBox background={color[format]} name={color.name} key={color.id} colorId={color.id} paletteId={id} moreLink={true} />
        ))
        return (
            <div className="Palette">
                <Navbar 
                 level={level}
                 changeLevel={this.changeLevel}
                 handleChange={this.changeFormat}
                 isAllColors
                 
                />
                {/*Navbar goes here*/}   
               
                <div className="Palette-colors">{paletteBoxes}</div>
                <Link to='/palette/note'><EventNoteIcon/></Link>
                
                <Footer paletteName={paletteName}  />
                
             {/* footer eventually and profile picture*/}
            </div>
        );
    }
}



export default Palette;
