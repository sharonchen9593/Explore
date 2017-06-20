export function selectImage(image) {
	//need to return action object with type property
	return {
		type: 'IMAGE_SELECTED',
		payload: image
	}
}