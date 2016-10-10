import Immutable from 'seamless-immutable';


export default function combineReducers(reducerMap){
    console.log(reducerMap);
    console.log(Object.keys(reducerMap));
    return function (state, action) {
        const combinedState = {};
        Object.keys(reducerMap).map(key => {
            combinedState[key] = reducerMap[key](state, action)
        });
        return Immutable(combinedState);
    };
}