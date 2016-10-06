import React from "react";
import ReactDOM from "react-dom";
import {addTodo} from "./action"
import {createStore} from "redux"
import todoApp from "./reducer"
import TodoList from "./TodoList"
import testStub, {testMock} from './test/awesomeStub.test.js';
import Immutable from 'seamless-immutable';

const init = function() {

    // const board = {
    //     board: {
    //         id: 1,
    //         issues:[
    //             {
    //                 id: 1,
    //                 key: 'key-1'
    //             },
    //             {
    //                 id: 2,
    //                 key: 'key-2'
    //             }
    //
    //         ]
    //     }
    // };
    // const ib = Immutable(board);
    // // console.log(ib);
    //
    // const card = ib.board.issues.map((issue) => {
    //    return {
    //        id: issue.id,
    //        name: 'test' + issue.id
    //    }
    // });
    //
    // console.log(card);
    
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

