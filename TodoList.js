import React, {Component} from "react";
import TodoItem from "./TodoItem";
import {connect} from 'react-redux';

class TodoList extends Component {
    render() {
        return <div>{this.props.list.map((item) => (<TodoItem summary={item.summary} key={item.key}/> ))}</div> ;
    }
}

export default connect(
    state => ({
        list: state.todos
    })
)(TodoList);
