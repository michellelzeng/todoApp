import React, {Component} from "react";
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
    render() {
//        console.log(this.props.list.toObject());
        var createItem = function (item) {
//            console.log(item);
            return <TodoItem summary={item.summary} key={item.key}/> ;
        };

        return <div>{this.props.list.toArray().map(createItem)}</div> ;
    }
}
//TodoList.propTypes = {
//    list: React.PropTypes.Array
//}
