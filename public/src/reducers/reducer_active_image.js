

export default function(state = null, action) {
	if (action.type === "IMAGE_SELECTED") {
		return action.payload;
	}
	
	return state;
}