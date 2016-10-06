import React from "react";
import ReactDOM from "react-dom";
import {addTodo} from "./action"
import {createStore, combineReducers} from "redux"
import todos from "./reducer"
import issues from './issue-reducer';
import Root from './Root';
import {Provider} from 'react-redux';

const init = function() {
    let store = createStore(combineReducers({todos, issues}));
    console.log(store.getState());

    document.getElementById("addTodo").addEventListener("click", function(){
        store.dispatch(addTodo(document.getElementById("summary").value));
    });

    ReactDOM.render(<Root store={store} />, document.getElementById("app"));
};

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

