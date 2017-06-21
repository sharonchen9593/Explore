import {connect} from 'react-redux';
import { selectImage } from '../actions/index';
import {bindActionCreators} from 'redux';



function imageAPICall(callback, refID) {

	$.ajax({
		url: Photo_API + refID ,
		success: function(data) {
			callback(data)
		},
		async: false
	})
}

class ImageList extends React.Component {


	getImages() {
		if(this.props.images) {
			var photoURL = []


			this.props.images.forEach(function(location) {

				location.photoRef.forEach(function(picture) {
					var API_KEY = 'AIzaSyC60u3VSBRDeUpTyRRq-NImzW5L5GHmTDE';
					var Photo_API = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key="+ API_KEY + "&photoreference=" + picture;
					var obj = {
						info: location,
						picture: Photo_API
					}
					photoURL.push(obj)
				})

			})

			return photoURL.map((location) => {
				return (
					<img
						onClick = {() =>this.props.selectImage(info)}
						key = {location.picture}
						src = {location.picture} />
				)
			})
		}



	}


	// renderList() {
	// 	return this.props.images.map((image) => {
	// 		return (
	// 			<li
	// 				onClick={()=>this.props.selectImage(image)}
	// 				key={image.title}
	// 				className="list-group-item">
	// 				{image.title}
	// 			</li>
	// 		)
	// 	})
	// }

	render() {
		return (
			<div>
				<span>
					{this.getImages()}
				</span>
			</div>
		);

	}
};

function mapStateToProps(state) {
	return {
		images: state.images
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectImage: selectImage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);

