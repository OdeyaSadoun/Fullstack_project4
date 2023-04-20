import React, { Component } from 'react';
import Keyboard from './keyboard';
import ChangeLang from './changeLang';
class TextArea extends Component {
    constructor(props) {
        super(props);
        console.log('textarea-ctor', props);

    }

    // render() {
    //     const { text, color, fontSize, fontFamily } = this.props;
    //     const style = { color: color, fontSize: fontSize, fontFamily: fontFamily };
    //     return (
    //         <div className="text-area" style={style}>
    //             {text.map((word, index) => {
    //                 return (
    //                     <span key={index} style={word.style}>{word.value}</span>
    //                 )
    //             })}
    //         </div>);
    // }
    // render() {
    //     const { color, fontSize, fontFamily } = this.props;
    //     return (

    //         <div className="textarea" style={{ color: color, fontSize: fontSize, fontFamily: fontFamily }}>
    //             {this.props.text.map((word, index) => (
    //                 <span key={index} style={{ color: color, fontSize: fontSize, fontFamily: fontFamily }}>
    //                     {word}
    //                 </span>
    //             ))}
    //         </div>
    //         // <div>
    //         //     <p style={{ color: color, fontSize: fontSize, fontFamily: fontFamily }} >{this.props.text}</p>
    //         // </div>
    //     );
    // }

    render() {
        return (
          <div className="textarea">
            {this.props.text.map((word, index) => (
              <span key={index} style={{ color: word.color, fontSize: word.fontSize, fontFamily: word.fontFamily }}>
                {word.value}
              </span>
            ))}
          </div>
        );
      }
}

export default TextArea;



// import React from 'react';

// const TextArea = ({ text, color, fontSize, fontFamily }) => {
//   return (
//     <div style={{ color, fontSize, fontFamily }}>
//       {text.map((word, index) => (
//         <span key={index} style={{ color: word.color }}>
//           {word.value}
//         </span>
//       ))}
//     </div>
//   );
// };

// export default TextArea;
