import React, {Component} from "react";
import ReactDOM from "react-dom";
import data from "./example_data.js";
const test="hello";
console.log(test);
//console.log(data);
//
//const element = <span>This is a span</span> ;
//console.log(element);

class TodoList extends Component{
    render(){
        return <div>Hello Matt</div>;
    }
};

ReactDOM.render(<TodoList/>, document.getElementById("app"));
