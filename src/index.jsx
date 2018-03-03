import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import getStore from './getstores';

const store = getStore();

//store.dispatch({type:'FETCH_QUESTION'})
store.subscribe(()=>{
    const state = store.getState();
    /**
     * When the questions array is populated, that means the saga round trip has completed,
     * and the application can be rendered.
     * Rendering before the questions arrived would result in the server-generated content being replaced with
     * a blank page.
     */
    if ( state.questions && state.questions.length > 0) {
        ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,document.getElementById('AppContainer'))
    }
});

