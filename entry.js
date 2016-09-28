import React from "react";
import ReactDOM from "react-dom";
import {addTodo} from "./action"
import {createStore} from "redux";
import todoApp from "./reducer"
import TodoList from "./TodoList"
import testStub, {testMock} from './test/awesomeStub.test.js';
import Counter from './Counter';
import {Provider} from 'react-redux';
import counterApp from './counterApp';

const init = function() {

    console.log(counterApp);
    let store = createStore(counterApp) ;

    // document.getElementById("addTodo").addEventListener("click", function(){
    //
    //     store.dispatch(addTodo(document.getElementById("summary").value));
    //
    //     ReactDOM.render(<TodoList list={store.getState().todos}/>, document.getElementById("todo-list"));
    // });

    // ReactDOM.render(<TodoList list={store.getState().todos}/>, document.getElementById("todo-list"));
    console.log(Counter);
    ReactDOM.render(
        <Provider store={store}>
            <Counter />
        </Provider>,
        document.getElementById('app')
    );

    // testStub();
    //testMock();
};

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

