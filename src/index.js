import React from 'react';
import ReactDOM from 'react-dom';

// Redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';

import App from './components/App/App';
import reducers from './reducers'
import './index.css';

// sending in our promise middleware
// this will return a function called higher order function that we are directly going to invoke with createStore as parameter
const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore) //created store with middleware

// Middleware needs to know what reducers it should use
ReactDOM.render(<Provider store={storeWithMiddleware(reducers)}>
        <App />
    </Provider>,
        document.getElementById('root')
    );