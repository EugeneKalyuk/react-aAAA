import {NEW_MESSAGE} from './actions';

const initialState = {
	payload: []
};

export default function userMessage(state = initialState, action) {
	switch (action.type){
		case NEW_MESSAGE:
			return {
				payload: action.payload
			};
		default:
			return state
	}
}