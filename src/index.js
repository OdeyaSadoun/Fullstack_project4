import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter  from '../src/Components/counter';
import TextEditor from './Components/textEditor';
import Keyboard from './Components/keyboard';
import Size from './Components/sizes';
import TextArea from './Components/textArea';
import ColorPalette from './Components/colorPalette';
import SpecialSetting from './Components/specialSetting';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TextEditor/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
