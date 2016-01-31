import React, {Component} from "react";
import ReactDOM from "react-dom";
import data from "./example_data.js";
import {TodoItem} from "./TodoItem"


class TodoList extends Component {
    render() {
            var createItem = function (item) {
                return <TodoItem summary={item.summary} key={item.key}/> ;
            };

            return <ul>{this.props.list.map(createItem)}</ul> ;
    }
}

ReactDOM.render(<TodoList list={data.items}/>, document.getElementById("app"));
