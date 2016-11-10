import React, {Component, PropTypes } from "react";
import TodoItem from "./TodoItem";
import { Map } from 'immutable';

export default class TodoList extends Component {
//    static propTypes = {
//        summary: PropTypes.string.isRequired,
//        key: PropTypes.string
//    };
    render() {
        console.log(this.props.list);

        var createItem = function (item) {
            const immutableItem = Map(item);
            console.log('immutableItem', immutableItem);
            return <TodoItem item={immutableItem} key={item.key}/> ;
        };

        return <div>{this.props.list.map(createItem)}</div> ;
    }
 }
 const todoItemType = PropTypes.shape({
                            summary: PropTypes.string,
                            completed: PropTypes.bool
                        });

 TodoList.propTypes = {
     list: PropTypes.arrayOf(todoItemType),
 }


