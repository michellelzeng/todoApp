import React from "react";
import ReactDOM from "react-dom";
import {addTodo} from "./action"
import {createStore} from "redux"
import todoApp from "./reducer"
import TodoList from "./TodoList"
import testStub from './test/stub.test.js';
import testMock from './test/mock.test.js';
import testMyStub from './test/MyStub.test.js';


const init = function() {

    let store = createStore(todoApp) ;

    document.getElementById("addTodo").addEventListener("click", function(){

        store.dispatch(addTodo(document.getElementById("summary").value));

        ReactDOM.render(<TodoList list={store.getState().todos}/>, document.getElementById("todo-list"));
    });

    ReactDOM.render(<TodoList list={store.getState().todos}/>, document.getElementById("todo-list"));

    //testStub();
    //testMock();
    testMyStub();
};

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

