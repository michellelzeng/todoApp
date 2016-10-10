import Immutable from 'seamless-immutable';
const initialState = Immutable([
    {
        id: 1,
        summary: 'this is a summary 1',
        desc: 'description 1'
    },
    {
        id: 2,
        summary: 'this is a summary 2',
        desc: 'description 2'
    }
]);

export default function (state = initialState, action){
    if(action.type === 'SELECT') {
        var newState = state.map((issue) => {
            if(issue.id === action.issueId) {
                return {
                    ...issue,
                    summary: issue.summary + issue.id,
                    desc: issue.desc + issue.desc
                }
            }
            return issue;
        });
        return newState;

    }
    return state;
}

export function selectIssue(issueId) {
    return {
        type: 'SELECT',
        issueId
    }
}