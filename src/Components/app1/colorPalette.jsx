import React, { Component } from 'react';
import '../../CSS/app1/colorPalette.css';

class ColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {color: "black"};

  }  render() { 
    const colors = [
      "#000000", //black
      "#808080", //gray
      "#FF0000", // red
      "#731800", // bordo
      "#FFB6C1", //pink
      "#FFA500", // orange
      "#FFFF00", // yellow
      "#008000", // green
      "#00CED1", // 
      "#0000FF", // blue
      "#4B0082", // indigo
      "#EE82EE"  // violet
    ];
  
    const handleChangeColor = (color) => {
      // Do something with the selected color
      console.log(`Selected color: ${color}`);
      this.props.onClick(color);
    };
  
    return (
      <div className='colorText'>
        {colors.map((color, index) => (
          <div className='currentColor'
            key={index}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: color,
              margin: "5px",
              cursor: "pointer",
              border: "1px solid black"
            }}
            onClick={() => handleChangeColor(color)}
          ></div>
        ))}
      </div>
    );
  }
}
 
export default ColorPalette;