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
            console.log(state);
            const newId = state.todos[state.todos.length -1].id + 1;
            const newState = state.update('todos', x => (x.concat(
            {
                id: newId,
                key: newId,
                summary: action.summary,
                completed: false
            }
            )));
            console.log(newState.todos);
            return newState;
//            return {
//                ...state,
////                todos: state.todos.concat(
////                    {
////                        id: newId,
////                        key: newId,
////                        summary: action.summary,
////                        completed: false
////                    }
////                ),
//                sumamry:""
//            };

        case COMPLETE_TODO:



    }
    return state;
}

export default todoApp