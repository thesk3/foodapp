import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import postReducer from './reducers/postReducer';
const store = createStore(postReducer,applyMiddleware(thunk));
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

