import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css'
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './rootReducer';
import {userLoggedIn} from "./actions/auth";
import Apps from './Apps';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.JWT){
    const user ={username:localStorage.Username,token:localStorage.JWT};
    store.dispatch(userLoggedIn(user));
}
ReactDOM.render(
    
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
    );
