import {ADD_TODO, COMPLETE_TODO, addTodo, completeTodo} from './action'
import data from "./example_data";
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    board: data.board,
    summary: ""
});

//console.log(initialState);
function todoApp(state = initialState, action = ADD_TODO) {
    switch(action.type) {
        case ADD_TODO:
            console.log(state);
            const newId = state.board.todos[state.board.todos.length -1].id + 1;
            const newState = state.updateIn(['board','todos'], x => (x.concat(
            {
                id: newId,
                key: newId,
                summary: action.summary,
                completed: false
            }
            )));
            console.log(newState.board.todos);
            return newState;
        case COMPLETE_TODO:
    }
    return state;
}

export default todoApp