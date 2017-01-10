export const NEW_MESSAGE = 'NEW_MESSAGE';

export function newMessage({msg}) {
	return dispatch => {
		dispatch({
			type: NEW_MESSAGE,
			payload: {msg}
		})
	}
}