import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { GetRouter } from './GetRouter';
import './index.css'

ReactDOM.render(
    <HashRouter>
        <App >
            <GetRouter />
        </App> 
    </HashRouter>
, document.getElementById('root'));
