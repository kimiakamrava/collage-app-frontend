import React, { Component } from 'react';
import PaletteBox from "./PaletteBox";
import "./Palette.css";

 class Palette extends Component {
    render() {
        const paletteBoxes = this.props.colors.map(material =>(
            <PaletteBox background={material.color} name={material.name} src={material.src} />
        ))
        return (
            <div className="Palette">
                {/*Navbar goes here*/}    
             <div className="Palette-colors">
                 {paletteBoxes}
                {/*bunch of color and image boxes*/}
             </div>
             {/* footer eventually*/}
            </div>
        )
    }
}



export default Palette;