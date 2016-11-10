import React, {Component, PropTypes} from "react";

export default class TodoItem extends Component{
    render(){
        return  <div><input type="checkbox" />{this.props.item.get('summary')} </div> ;
    }
}
//
TodoItem.propTypes = {
    item: React.PropTypes.shape({
         summary: PropTypes.string,
         completed: PropTypes.bool
     }),
}
