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

        if (key === 'Upper all') {
            console.log('upper', text);
            text = text.map(str => str.toUpperCase());
            this.props.onClick(text);

        } else if (key === 'Lower all') {
            console.log('lower', text);
            text = text.map(str => str.toLowerCase());
            this.props.onClick(text);
        }

        if (key === 'Clear all') {
            text = '';
        }
        else if (key === 'All') {
            this.props.onAllButton()();
        } else if (key === 'Single') {
            this.props.onSingleButton()();
        }
    };



    render() {

        return (
            <div className="options-container option specials">
                <button className='option-all' value={'All'} onClick={() => this.handleClick('All')}>All</button>
                <button className='option-single' value={'Single'} onClick={() => this.handleClick('Single')}>Single</button>
                <button className='option-clear-all' value={'Clear all'} onClick={() => this.handleClick('Clear all')}>Clear all</button>
                <button className='option-upper-all' value={'Upper all'} onClick={() => this.handleClick('Upper all')}>Upper all</button>
                <button className='option-lower-all' value={'Lower all'} onClick={() => this.handleClick('Lower all')}>Lower all</button>
            </div>
        );
    }
}

export default SpecialSetting;