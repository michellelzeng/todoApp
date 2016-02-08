export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"

export function addTodo(summary) {
    return {
        type: ADD_TODO,
        summary: summary
    }
}

export function completeTodo(summary) {
    return {
        type: COMPLETE_TODO,
        summary: summary
    }
}