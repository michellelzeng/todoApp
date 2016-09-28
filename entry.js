import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import Counter from './Counter';
import {Provider} from 'react-redux';
import configStore from './configStore.js';

const init = function() {
    let store = configStore() ;

    ReactDOM.render(
        <Provider store={store}>
            <Counter />
        </Provider>,
        document.getElementById('app')
    );
};

if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

