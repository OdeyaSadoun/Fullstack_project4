import React, { Component } from 'react';
class SpecialSetting extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <button>Clear all</button>
                <button>Upper all</button>
                <button>Lower all</button>
                <button>Ctrl Z</button>
                <button>Ctrl Y</button>
            </div>
        );
    }
}
 
export default SpecialSetting;