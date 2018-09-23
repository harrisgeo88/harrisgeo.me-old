import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './responsive.css';
import App from './App.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
