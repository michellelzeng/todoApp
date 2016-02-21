import React, {Component} from "react";

export default class TodoItem extends Component{
    render(){
        return  <div><input type="checkbox" />{this.props.summary} </div> ;
    }
}