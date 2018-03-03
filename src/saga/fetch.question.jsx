import { put, take } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

export default function * () {
    while (true) {
        /**
         * Wait for a request to fetch questions, then fetch data from the API and notify the application
         * that new questions have been loaded.
         */
        yield take(`FETCH_QUESTION`);
        const raw = yield fetch('/api/questions');
        const json = yield raw.json();
        const questions = json.items;
        yield put({type:`FETCH_QUESTION`,payload:questions});
    }
}