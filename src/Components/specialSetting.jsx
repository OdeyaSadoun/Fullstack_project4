import React, { Component } from 'react';
import '../CSS/specialSetting.css';

class SpecialSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''        };
    }

    handleKeyPress = key => {
        if (key === 'Clear all') {
            this.setState({ text: '' });
        } else if (key === 'Upper all') {
            this.setState(prevState => ({
                text: prevState.text.toUpperCase()
            }));
        } else if (key === 'Lower all') {
            this.setState(prevState => ({
                text: prevState.text.toLowerCase()
            }));
        }
    };

    render() {
        let options = [
            { label: 'Clear all', value: 'Clear all' },
            { label: 'Upper all', value: 'Upper all' },
            { label: 'Lower all', value: 'Lower all' }
        ];
        return (
            <div className="options-container">
                {options.map((key, index) => {
                    let classes = 'option specials';
                    if (key.value === 'Clear all') classes += 'option-clear-all';
                    if (key.value === 'Upper all') classes += 'option-upper-all';
                    if (key.value === 'Lower all') classes += 'option-lower-all';

                    return (
                        <button
                            key={index}
                            className={classes}
                            onClick={() => this.handleKeyPress(key.value)}
                        >
                            {key.value}
                        </button>
                    );
                })}
            </div>
        );
    }
}

export default SpecialSetting;