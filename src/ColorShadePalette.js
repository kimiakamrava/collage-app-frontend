import React, { Component } from 'react';
import PaletteBox from "./PaletteBox";

class ColorShadePalette extends Component {
    constructor(props){
        super(props);
        this.preShades = this.theShades(this.props.palette, this.props.colorId);
       
    }
    theShades(palette, filteredColor) {
        let shades = [];
        let allColors = palette.colors;

        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === filteredColor)
            );
        }
        return shades.slice(1);
    }
    render() {
        const ShadeBoxes = this.preShades.map(color => (<PaletteBox key={color.id} name={color.name} background={color.hex} />))
        return (
            <div className="Palette">
                <h1> color shade</h1>
                <div className='Palette-colors'>{ShadeBoxes}</div>
            </div>
        );
        
    }
}

export default ColorShadePalette;