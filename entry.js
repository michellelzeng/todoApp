import React from "react";
import ReactDOM from "react-dom";
import data from "./example_data";
import TodoList from "./TodoList"

const init = function() {

    document.getElementById("addTodo").addEventListener("click", function(){
        const summary = document.getElementById("summary").value;
        const lastKey = data.items[data.items.length -1].key ;
        data.items.push({key: lastKey + 1, summary: summary, completed: "todo"});
        ReactDOM.render(<TodoList list={data.items}/>, document.getElementById("todo-list"));
    });
    ReactDOM.render(<TodoList list={data.items}/>, document.getElementById("todo-list"));
};

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

