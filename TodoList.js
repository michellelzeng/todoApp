import React, {Component} from "react";
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
    render() {
        var createItem = function (item) {
            return <TodoItem summary={item.summary} key={item.key}/> ;
        };

        return <div>{this.props.list.map(createItem)}</div> ;
    }
}
