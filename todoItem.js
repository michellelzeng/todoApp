import React, {Component} from "react";

export class TodoItem extends Component{
    render(){
        return <li >{this.props.summary}</li> ;
    }
}