import React from 'react';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store';
import App from './container/app/app';


const target = document.querySelector('#root');

render(
    <App/>,
    target
);