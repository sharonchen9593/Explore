import {connect} from 'react-redux';

class ImageDetails extends React.Component {
	render() {
		if(!this.props.image) {
			return <div>Search a city to get started</div>
		}
		return (
			<div>
				{this.props.image.title}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		image: state.activeImage
	}
}

export default connect(mapStateToProps)(ImageDetails);