import React, { Component } from 'react';
import '../CSS/keyboard.css';

class Keyboard extends Component {
    state = {

    }
    render() {
        return (
            <React.Fragment>
                <div id="keyboard">
                    <div class="key wide">Q</div>
                    <div class="key">W</div>
                    <div class="key">E</div>
                    <div class="key">R</div>
                    <div class="key">T</div>
                    <div class="key">Y</div>
                    <div class="key">U</div>
                    <div class="key">I</div>
                    <div class="key">O</div>
                    <div class="key">P</div>
                    <div class="key">A</div>
                    <div class="key">S</div>
                    <div class="key">D</div>
                    <div class="key">F</div>
                    <div class="key">G</div>
                    <div class="key">H</div>
                    <div class="key">J</div>
                    <div class="key">K</div>
                    <div class="key">L</div>
                    <div class="key">Z</div>
                    <div class="key">X</div>
                    <div class="key">C</div>
                    <div class="key">V</div>
                    <div class="key">B</div>
                    <div class="key">N</div>
                    <div class="key">M</div>
                    <div class="key wide">Space</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Keyboard;