import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./PaletteBox.css";

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
        const {name, background} = this.props;
        const {Done} = this.state;
        return(
         <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <div style={{ background }} className='PaletteBox'>
               <div 
                  style={{ background }} 
                  className={`Done-overlay ${Done && "show"}`}
                />
                <div className={`done-msg ${Done && "show"}`}>
                    <h1>Done</h1>
                    <p>{this.props.background}</p>
                </div>
             <div className="copy-container">
             <div className="box-content">
             <span>{name}</span>
             </div>
             <button className="copy-button">Copy</button>
             </div>
             <span className="see-more">More</span>
            </div>
         </CopyToClipboard>
        )
    }
}

export default PaletteBox;