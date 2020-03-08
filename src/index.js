import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import shoppingReducer from './reducers/shoppingReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(shoppingReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


