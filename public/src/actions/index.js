import axios from 'axios';

const API_KEY = 'AIzaSyC60u3VSBRDeUpTyRRq-NImzW5L5GHmTDE';

const API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.5963,-122.0657&radius=50000&type=park&key=AIzaSyC60u3VSBRDeUpTyRRq-NImzW5L5GHmTDE';

export const IMAGE_SELECTED = 'IMAGE_SELECTED';
export const FETCH_IMAGES = 'FETCH_IMAGES';

export function selectImage(image) {
	//need to return action object with type property
	return {
		type: IMAGE_SELECTED,
		payload: image
	}
}



export function fetchImages(city) {
	// const request = api get request
	var request = axios.get(API_URL);

	return {
		type: FETCH_IMAGES,
		payload: console.log(request)

	}
}