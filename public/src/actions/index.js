import axios from 'axios';

const API_KEY = 'AIzaSyC60u3VSBRDeUpTyRRq-NImzW5L5GHmTDE';
const CORS = 'https://cors-anywhere.herokuapp.com/';
const API_URL = CORS + 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?&key=' + API_KEY + '&radius=50000&type=park&location=';







export const IMAGE_SELECTED = 'IMAGE_SELECTED';
export const FETCH_IMAGES = 'FETCH_IMAGES';

export function selectImage(image) {
	//need to return action object with type property
	return {
		type: IMAGE_SELECTED,
		payload: image
	}
}




export function fetchImages(location) {
	const url = API_URL + location
	const request = axios.get(url)

	return {
		type: FETCH_IMAGES,
		// if payload is promise, stops application until we get a response
		payload: request

	}
}
