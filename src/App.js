import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component  {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}
	render() {
		return(
			<div className='tc'>
				<h1>Robotfriends</h1>
				<SearchBox />
				<CardList robots={this.state.robots}/>
			</div>
		);
	}
}

export default App;