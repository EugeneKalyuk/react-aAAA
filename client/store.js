import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import createLogger  from 'redux-logger';
import userMessage from './component/comments/reducer'

export default function store(initialState) {
	let logger = createLogger();
    return createStore(
	    combineReducers({
		    userMessage,
		    form: formReducer
	    }),
	    initialState,
	    applyMiddleware(thunk)
  );
}
