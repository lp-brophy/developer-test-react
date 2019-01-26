import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import CardContainer from './CardContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CardContainer />, document.getElementById('root'));
serviceWorker.unregister();