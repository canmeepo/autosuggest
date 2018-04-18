import React, { Component } from 'react';
import SearchBar from './SearchBar';
import '../assets/styles/App.styl';

export class App extends Component {
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

export default App;