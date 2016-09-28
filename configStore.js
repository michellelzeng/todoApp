import {createStore, applyMiddleware} from "redux";
import counterApp from './counterApp';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import pingEpic from './ping-epic';
import incrementEpic from './increment-epic';

export default function configStore() {
    const rootEpic = combineEpics(
        pingEpic,
        incrementEpic
    );

    const epicMiddleware = createEpicMiddleware(rootEpic);
    const store = createStore(
        counterApp,
        applyMiddleware(epicMiddleware)
    );
    return store;
};

