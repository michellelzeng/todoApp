function counterApp(state = {total: 0}, action){
    if(action.type === 'plus') {
        return {
            total: state.total + 1
        };
    }
    return state;
};

export default counterApp;