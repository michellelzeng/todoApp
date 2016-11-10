import React from "react";
import ReactDOM from "react-dom";
import {addTodo} from "./action"
import {createStore} from "redux"
import todoApp from "./reducer"
import TodoList from "./TodoList"
import testStub, {testMock} from './test/awesomeStub.test.js';
import {List} from 'immutable';

const init = function() {

    let store = createStore(todoApp) ;
            console.log(store.getState().board.todos);

    document.getElementById("addTodo").addEventListener("click", function(){

        store.dispatch(addTodo(document.getElementById("summary").value));



        ReactDOM.render(<TodoList list={list}/>, document.getElementById("todo-list"));
    });

const list = List(store.getState().board.todos);
console.log('toArray', list.toArray());
const list2 = list.push(1, 2);
console.log('length', list.size);
console.log(list2.size);
//const list = store.getState().board.todos;
        console.log('list', list);
    ReactDOM.render(<TodoList list={list.toArray()}/>, document.getElementById("todo-list"));
};

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

