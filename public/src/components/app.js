import ImageList from '../containers/imageList';
import ImageDetails from '../containers/imageDetails';
import SearchBar from '../containers/searchBar.js';

export default class App extends React.Component {
	
	render() {
		return (
			<div>
				<SearchBar />
				<ImageList />
				<ImageDetails />
			</div>
		);
	}
}

