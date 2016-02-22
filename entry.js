import React from "react";
import ReactDOM from "react-dom";
import {addTodo} from "./action"
import {createStore} from "redux"
import todoApp from "./reducer"
import TodoList from "./TodoList"
import testReturns from './test/MyStubReturns.test.js';
import test from './test/mock.test.js';


const init = function() {

    let store = createStore(todoApp) ;

    document.getElementById("addTodo").addEventListener("click", function(){

        store.dispatch(addTodo(document.getElementById("summary").value));

        ReactDOM.render(<TodoList list={store.getState().todos}/>, document.getElementById("todo-list"));
    });

    ReactDOM.render(<TodoList list={store.getState().todos}/>, document.getElementById("todo-list"));

    testReturns();
    //test()
};

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

