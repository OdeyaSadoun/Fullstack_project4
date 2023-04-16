import React, { Component } from 'react';
import '../CSS/specialSetting.css';

class SpecialSetting extends Component {
    constructor(props) {
        super(props);
        console.log('SpecialSetting - ctor',props)
        this.state={
            text: this.props.text
        }
    }

    handleClick = key => {
        let {text} = this.state;

        console.log('text', text)
        if (key === 'Clear all') {
            text = '';
        } else if (key === 'Upper all') {
            text = text.toUpperCase();
        } else if (key === 'Lower all') {
            text = text.toLowerCase();
        }
        this.props.onClick(text);
    };



    render() {
        // let options = [
        //     { label: 'Clear all', value: 'Clear all' },
        //     { label: 'Upper all', value: 'Upper all' },
        //     { label: 'Lower all', value: 'Lower all' }
        // ];
        return (
            <div className="options-container option specials">
                <button className='option-clear-all' value={'Clear all'} onClick={() => this.handleClick('Clear all')}>Clear all</button>
                <button className='option-upper-all' value={'Upper all'} onClick={() => this.handleClick('Upper all')}>Upper all</button>
                <button className='option-lower-all' value={'Lower all'} onClick={() => this.handleClick('Lower all')}>Lower all</button>
                {/* 
                {options.map((key, index) => {
                    let classes = 'option specials';
                    if (key.value === 'Clear all') classes += 'option-clear-all';
                    if (key.value === 'Upper all') classes += 'option-upper-all';
                    if (key.value === 'Lower all') classes += 'option-lower-all';

                    return (
                        <button
                            key={index}
                            className={classes}
                            onClick={() => this.handleButtonSpecialSettingClick(key.value)}
                        >
                            {key.value}
                        </button>
                    );
                })} */}
            </div>
        );
    }
}

export default SpecialSetting;