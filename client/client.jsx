import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import {decode} from './helpers/base64';

import routes from './routes.jsx';
import store from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

window.React = React;

const initialState = window.__INITIAL_STATE__ ? JSON.parse(decode(window.__INITIAL_STATE__)) : {}; // eslint-disable-line no-underscore-dangle
const catchedStore = store(initialState);

render(
    <MuiThemeProvider>
        <Provider store={catchedStore}>
           <Router history={browserHistory} routes={routes(catchedStore)} />
        </Provider>
    </MuiThemeProvider>,
  document.getElementById('content')
);

