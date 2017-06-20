export function selectBook(image) {
	//need to return action object with type property
	return {
		type: 'BOOK_SELECTED',
		payload: image
	}
}