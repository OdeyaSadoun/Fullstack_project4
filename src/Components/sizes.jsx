import React, { Component } from 'react';
import '../CSS/sizes.css';

class Size extends Component {
    state = {}

    render() {
        return (
            <div>
                <input type="range" min="1" max="36" className="slider" />
            </div>
        );
    }
}

export default Size;