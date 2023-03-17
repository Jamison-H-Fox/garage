import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './reset.css';
import './index.css';
import reducer from './reducers'

import { BrowserRouter as Router } from 'react-router-dom';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';



const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);