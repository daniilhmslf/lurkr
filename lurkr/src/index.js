import React from 'react';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers(reducers), composeWithDevTools(
  applyMiddleware(thunk)
));
ReactDOM.render(
<Provider store={store}>
  <App /> 
</Provider>, document.getElementById('root'));
registerServiceWorker();
