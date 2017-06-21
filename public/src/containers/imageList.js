import {connect} from 'react-redux';
import { selectImage } from '../actions/index';
import {bindActionCreators} from 'redux';

class ImageList extends React.Component {
	renderList() {
		return this.props.images.map((image) => {
			return (
				<li
					onClick={()=>this.props.selectImage(image)}
					key={image.title}
					className="list-group-item">
					{image.title}
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<ul className="list-group col-sm-4">

					{this.renderList()}
				</ul>
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

