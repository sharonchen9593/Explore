import {connect} from 'react-redux';
import { selectImage } from '../actions/index';
import {bindActionCreators} from 'redux';

class ImageList extends React.Component {


	getImages() {
		console.log("run", this.props.images)
		if(this.props.images) {

			console.log("this.props.images", this.props.images[0], Object.keys(this.props.images[0]))


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
				<ul className="list-group col-sm-4">
					{console.log("state", this.state)}
					{this.getImages()}
				</ul>
			</div>
		);

	}
};

function mapStateToProps(state) {
	console.log(state)
	return {
		images: state.images
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectImage: selectImage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);

