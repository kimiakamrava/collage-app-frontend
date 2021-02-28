import React, { Component } from 'react';
import HomePalette from './HomePalette';
import { Link } from "react-router-dom";

class PaletteAll extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <HomePalette/>
                <h1>My Palettes</h1>
                {palettes.map(palette => (
                 <HomePalette {...palette}/>
                ))}    

            </div>
        );
    }
}

export default PaletteAll;