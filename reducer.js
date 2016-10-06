import {ADD_TODO, COMPLETE_TODO, addTodo, completeTodo} from './action'
import data from "./example_data";
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    todos: data.todos,
    summary: ""
});

function todoApp(state = initialState, action = ADD_TODO) {
    switch(action.type) {
        case ADD_TODO:
            const newId = state.todos[state.todos.length -1].id + 1;
            
            const newState = state.updateIn(['todos'], x => (x.concat({
                id: newId,
                key: newId,
                summary: action.summary,
                completed: false
            })));
            return newState;
        case COMPLETE_TODO:

    }
    return state;
}

export default todoApp