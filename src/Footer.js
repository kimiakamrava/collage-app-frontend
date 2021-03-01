import React from "react";
function Footer(props) {
    const {paletteName} = props; 
return (
<footer className="Single-Palette-footer">
     {paletteName}                
 </footer>
)
}
export default Footer;