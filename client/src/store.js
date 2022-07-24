import { configureStore } from '@reduxjs/toolkit';
import { compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/root';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({ reducer: rootReducer }, composeEnhancer(applyMiddleware(reduxThunk)));

export default store;
