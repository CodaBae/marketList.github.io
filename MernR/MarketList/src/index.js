import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/App.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import fontAwesome from 'react-fontawesome';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
