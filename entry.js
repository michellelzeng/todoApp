import React from "react";
import ReactDOM from "react-dom";
import {addTodo} from "./action";
import {createStore} from "redux";
import todos from "./reducer";
import issues from "./issue-reducer";
import Root from "./Root";
import {Provider} from "react-redux";
import {freeze, setIn, updateIn} from "icepick";
import combineReducers from './combineReducers';

const init = function () {
    let store = createStore(combineReducers({todos, issues}));

    // var original = freeze({all: 'your base', are: {belong: 'to them', name: 'Alex'}});
    //
    // const value = setIn(original, ['are', 'belong'], 'to us');// setIn sets the new value for the given property
    // const value1 = updateIn(original, ['are', 'belong'], x => 'hello ' + x);
    //
    // console.log(value);
    // console.log(value1);
    document.getElementById("addTodo").addEventListener("click", function () {
        store.dispatch(addTodo(document.getElementById("summary").value));
    });





    ReactDOM.render(<Root store={store}/>, document.getElementById("app"));
};

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

