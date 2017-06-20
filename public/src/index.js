import PicturesList from './components/picturesList';

class App extends React.Component {
	
	render() {
		return (
			<div>
				<PicturesList />
			</div>
	)
	};
}

ReactDOM.render(<App />, document.querySelector('.container'))