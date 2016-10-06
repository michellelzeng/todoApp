import {ADD_TODO, COMPLETE_TODO, addTodo, completeTodo} from './action'
import data from "./example_data";
import Immutable from 'seamless-immutable';

const initialState = Immutable(data);

function todoApp(state = initialState, action = ADD_TODO) {
    switch(action.type) {
        case ADD_TODO:
            const newId = state[state.length -1].id + 1;
            
            const newState = Immutable(state.concat({
                id: newId,
                key: newId,
                summary: action.summary,
                completed: false
            }));
            return newState;
        case COMPLETE_TODO:

    }
    return state;
}

export default todoApp