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

		var address = this.state.term.split(' ').join('').split(',')

		var city = address[0];
		var state = address[1];
		var prop = this.props
		$.ajax({
		  url: "http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=" + city + '+' + state,
		  success: function(data) {
		  	//console.log("success")
		  	var loc = data.results;
		  	var latlon = loc[0].geometry.location.lat+','+loc[0].geometry.location.lng;
			  prop.fetchImages(latlon);
			}
		})

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