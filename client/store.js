import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import createLogger from 'redux-logger'
import { reducer as formReducer } from 'redux-form'

export default function store(initialState) {
	const logger = createLogger();
    return createStore(
	    combineReducers({
		    form: formReducer
	    }),
	    initialState,
	    applyMiddleware(logger)
  );
}
