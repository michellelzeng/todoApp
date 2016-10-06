import React, {Component} from "react";
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
    render() {
        console.log(this.props.list);
        const todoItems = this.props.list.map((item) => (<TodoItem summary={item.summary} key={item.key}/> ));
        console.log(todoItems);
        // todoItems[0].props.summary = 'new summary';
        return <div>{this.props.list.map((item) => (<TodoItem summary={item.summary} key={item.key}/> ))}</div> ;
    }
}
