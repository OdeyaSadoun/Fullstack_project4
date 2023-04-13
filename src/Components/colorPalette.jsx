import React, { Component } from 'react';
class ColorPalette extends Component {
  state = {  } 
  render() { 
    const colors = [
      "#FF0000", // red
      "#FFA500", // orange
      "#FFFF00", // yellow
      "#008000", // green
      "#0000FF", // blue
      "#4B0082", // indigo
      "#EE82EE"  // violet
    ];
  
    const handleClick = (color) => {
      // Do something with the selected color
      console.log(`Selected color: ${color}`);
    };
  
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: color,
              margin: "5px",
              cursor: "pointer",
              border: "1px solid black"
            }}
            onClick={() => handleClick(color)}
          ></div>
        ))}
      </div>
    );
  }
}
 
export default ColorPalette;