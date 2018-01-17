//'state' concerns the state that this particular reducer is responsible for.
export default function(state = null, action) {
	console.log('Action Received: ', action);
	return state;
}