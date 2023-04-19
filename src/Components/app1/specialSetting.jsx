import React, { Component } from 'react';
import '../../CSS/app1/specialSetting.css';

class SpecialSetting extends Component {
    constructor(props) {
        super(props);
        console.log('SpecialSetting - ctor', props)
        this.state = {
            text: this.props.text,
            language: this.props.language
        }
    }

    handleClick = key => {
        let { text, language } = this.props; //for real time updates
        console.log('text', text);
        if (language === 'english') {
            if (key === 'Clear all') {
                text = '';
            } else if (key === 'Upper all') {
                console.log('upper', text);
                text = text.toUpperCase();
            } else if (key === 'Lower all') {
                console.log('lower', text);
                text = text.toLowerCase();
            }
        }
        this.props.onClick(text);
    };



    render() {

        return (
            <div className="options-container option specials">
                <button className='option-clear-all' value={'Clear all'} onClick={() => this.handleClick('Clear all')}>Clear all</button>
                <button className='option-upper-all' value={'Upper all'} onClick={() => this.handleClick('Upper all')}>Upper all</button>
                <button className='option-lower-all' value={'Lower all'} onClick={() => this.handleClick('Lower all')}>Lower all</button>
            </div>
        );
    }
}

export default SpecialSetting;