import React from "react";
import ReactDOM from "react-dom";
import data from "./example_data";
import TodoList from "./TodoList"

const init = function() {
    ReactDOM.render(<TodoList list={data.items}/>, document.getElementById("todo-list"));
};

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

