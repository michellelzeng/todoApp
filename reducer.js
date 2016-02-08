import {ADD_TODO, COMPLETE_TODO, addTodo, completeTodo} from './action'
import data from "./example_data";

const initialState = {
    todos: data.todos
}

function todoApp(state = initialState, action = ADD_TODO) {
    switch(action.type) {
        case ADD_TODO:
            const newId = state.todos[state.todos.length -1].id + 1;
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        id: newId,
                        key: newId,
                        summary: action.summary,
                        completed: false
                    }
                ]
            });


    }
    return state;
}

export default todoApp