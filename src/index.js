import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TextEditor from './Components/app1/textEditor';
import Keyboard from './Components/app1/keyboard';
import Size from './Components/app1/sizes';
import TextArea from './Components/app1/textArea';
import ColorPalette from './Components/app1/colorPalette';
//import SpecialSetting from './Components/specialSetting';
import Game from './Components/app2/game';
import GameBoard from './Components/app2/gameBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
