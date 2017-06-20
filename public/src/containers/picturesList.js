import {connect} from 'react-redux';

class PicturesList extends React.Component {
	renderList() {
		return this.props.images.map((image) => {
			return (
				<li key={image.title} className="list-group-item">{image.title}</li>
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

export default connect(mapStateToProps)(PicturesList);