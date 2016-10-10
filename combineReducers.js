import Immutable from 'seamless-immutable';
import {combineReducers} from 'redux';

export default function ownCombineReducers(reducerMap){
    console.log(reducerMap);
    console.log(Object.keys(reducerMap));
//    return function (state, action) {
//        const combinedState = {};
//        Object.keys(reducerMap).map(key => {
//            combinedState[key] = reducerMap[key](state === undefined ? undefined : state[key] , action);
//        });
//        return Immutable(combinedState);
//    };
        return (state, action) => Immutable((combineReducers(reducerMap)(state,action)));
}