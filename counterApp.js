function counterApp(state = {total: 0}, action){
    console.log(state, action);
    if(action.type === 'INCREMENT') {
        return {
            total: state.total + 1
        };
    }
    return state;
};

export default counterApp;