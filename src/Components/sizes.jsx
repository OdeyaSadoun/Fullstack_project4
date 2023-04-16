import React, { Component } from 'react';
import '../CSS/sizes.css';

class Size extends Component {
    constructor(props) {
        super(props);
    }
    handleChangeSize = (direction) => {
        const { fontSize } = this.props;
        let size;
        console.log(`Selected size: ${fontSize}`);
        if (direction === 'plus') {
            // Increase the font size
            size =  fontSize + 1;
            console.log(size)
        } else if (direction === 'minus') {
            // Decrease the font size
            size =  fontSize - 1;
            console.log(size)

        }
        this.props.onClick(size);
    };
    render() {
        const { fontSize } = this.props;
        return (
            <div className='size'>
                <button id='plus' className='plus element-size' onClick={() => this.handleChangeSize('plus')}>+</button>
                <input id='sizeText' className='element-size' type='text' value={fontSize} onChange={(e) => this.props.onClick({ fontSize: e.target.value })} />
                <button id='minus' className='minus element-size' onClick={() => this.handleChangeSize('minus')}>-</button>
            </div>
        );
    }
}

export default Size;