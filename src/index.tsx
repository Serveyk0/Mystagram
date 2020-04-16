import React from 'react';
import { HashRouter } from 'react-router-dom';
import { GetRouter } from './GetRouter';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App >
                <GetRouter />
            </App> 
        </HashRouter>
    </Provider>
, document.getElementById('root'));
