import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectIssue} from './issue-reducer';

export class Issue extends Component {
    render() {
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

const getIssueSelector = (state, issueId) => (
    state.issues.find((issue) => (issue.id === issueId))
);

export default connect(
    (state, ownProps) => {
        return {
            issue: getIssueSelector(state, ownProps.issueId)
        }},
    (dispatch, ownProps) => ({
        onClick: () => {dispatch(selectIssue(ownProps.issueId))}
    })
)(Issue);