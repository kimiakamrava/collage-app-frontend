import React, { Component } from 'react'
import chroma from "chroma-js";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { withRouter, Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import "./PaletteBox.css";

const style = {
  whenDone: {
    color: props =>chroma(props.background).luminance() > 0.7 ? "gray": "white"
  }
};

class PaletteBox extends Component {
    constructor(props) {
        super(props);
        this.state = { Done: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({ Done: true }, () => {
         setTimeout(() => this.setState({ Done: false }), 1500);   
        });
    }
    render() {
        const { name, background, paletteId, colorId, moreLink, classes } = this.props;
        const { Done } = this.state;
        const darkish = chroma(background).luminance() <= 0.05;
        const brightish = chroma(background).luminance() > 0.7;
        return(
         <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <div style={{ background }} className='PaletteBox'>
               <div 
                  style={{ background }} 
                  className={`Done-overlay ${Done && "show"}`}
                />
                <div className={`done-msg ${Done && "show"}`}>
                    <h1>Done</h1>
                    <p className={classes.whenDone}>{this.props.background}</p>
                </div>
             <div className="copy-container">
             <div className="box-content">
                 <span className={darkish && "lightish"}>{name}</span>
             </div>
             <button className={`copy-button ${brightish && "blackish"}`}>Copy</button>
             </div>
             {moreLink && (
             <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
              <span className={`see-more ${brightish && "blackish"}`}>Shades</span>
             </Link>
             )}
            </div>
         </CopyToClipboard>
        )
    }
}

export default  withStyles(style)(PaletteBox);