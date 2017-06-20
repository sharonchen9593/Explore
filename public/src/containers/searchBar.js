import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchImages} from '../actions/index'

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {term: ''};
		
		//this.onInputChange=this.onInputChange.bind(this)
	}
	
	onInputChange(event) {
		this.setState({term: event.target.value})
		
	}
	
	onFormSubmit(event) {
		event.preventDefault();
		
		this.props.fetchImages(this.state.term);
		
		this.setState({term:''});
	}
	
	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
				<input
					placeholder="Search your city"
				  className="form-control"
				  value={this.state.term}
				  onChange={this.onInputChange.bind(this)}
				/>
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchImages}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);