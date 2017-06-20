import ImageList from '../containers/imageList';
import ImageDetails from '../containers/imageDetails';

export default class App extends React.Component {
	
	render() {
		return (
			<div>
				<ImageList />
				<ImageDetails />
			</div>
		);
	}
}

