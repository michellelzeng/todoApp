import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectIssue} from './issue-reducer';

export class Issue extends Component {
    render() {
        // console.log('render method is called', this.props.issue.id);
        return (
            <div>
                card
                <div onClick={this.props.onClick}>
                    {this.props.issue.summary}
                </div>
            </div>
        )
    }    
}

export default connect(
    (state, ownProps) => ({issue: state.issues.find((issue) => (issue.id === ownProps.issueId))}),
    (dispatch, ownProps) => {
        console.log('connect method is called');
        return {
            onClick: () => {dispatch(selectIssue(ownProps.issueId))}
        }
    }
)(Issue);