import {connect} from 'react-redux';

export default class SearchBar extends React.Component {
	render() {
		return (
			<form className="input-group">
				<input />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}

// function mapStateToProps(state) {
// 	return {
// 		image: state.activeImage
// 	}
// }
//
// export default connect(mapStateToProps)(SearchBar);