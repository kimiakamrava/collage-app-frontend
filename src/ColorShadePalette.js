import React, { Component } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer"
import PaletteBox from "./PaletteBox";


class ColorShadePalette extends Component {
    constructor(props){
        super(props);
        this.preShades = this.theShades(this.props.palette, this.props.colorId);
        this.state = { format: "hex" };
        this.changeFormat = this.changeFormat.bind(this);
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
    changeFormat(value) {
        this.setState({ format: value });
    }
    render() {
        const { format } = this.state;
        const {paletteName} = this.props.palette;
        const ShadeBoxes = this.preShades.map(color => (<PaletteBox key={color.id} name={color.name} background={color[format]} moreLink={false} />))
        return (
            <div className="Palette">
                <Navbar handleChange={this.changeFormat} isAllColors={false} />
                
                <div className='Palette-colors'>{ShadeBoxes}</div>
                <Footer paletteName={paletteName} />
            </div>
        );
        
    }
}

export default ColorShadePalette;