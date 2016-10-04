import {ADD_TODO, COMPLETE_TODO, addTodo, completeTodo} from './action'
import data from "./example_data";
import {List} from 'immutable';

const initialState = {
    todos: List(data.todos),
    summary: ""
}

console.log(initialState.todos);
console.log(initialState.todos.toArray());
function todoApp(state = initialState, action = ADD_TODO) {
    switch(action.type) {
        case ADD_TODO:
            const newId = state.todos[state.todos.length -1].id + 1;
            return {
                ...state,
                todos: state.todos.concat(
                    {
                        id: newId,
                        key: newId,
                        summary: action.summary,
                        completed: false
                    }
                ),
                sumamry:""
            };

        case COMPLETE_TODO:



    }
    return state;
}

export default todoApp