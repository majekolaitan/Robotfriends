import React, { component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

const state = {
	robots: robots,
	searchfield: ''
}

class App extends component  {
	render() {
		return(
			<div className='tc'>
				<h1>Robotfriends</h1>
				<SearchBox />
				<CardList robots={robots}/>
			</div>
		);
	}
}

export default App;