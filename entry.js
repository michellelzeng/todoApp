import React from "react";
import ReactDOM from "react-dom";
import {addTodo} from "./action"
import {createStore} from "redux"
import todoApp from "./reducer"
import TodoList from "./TodoList"
import testStub, {testMock} from './test/awesomeStub.test.js';


const init = function() {

    console.log('test');
    let store = createStore(todoApp) ;

    document.getElementById("addTodo").addEventListener("click", function(){

        store.dispatch(addTodo(document.getElementById("summary").value));

        ReactDOM.render(<TodoList list={store.getState().todos}/>, document.getElementById("todo-list"));
    });

    ReactDOM.render(<TodoList list={store.getState().todos}/>, document.getElementById("todo-list"));
};

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

