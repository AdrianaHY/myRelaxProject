import React, { Component } from 'react';
import { Text, View } from 'react-360';
import Title from './Elements/Title.js';
import Button from './Elements/Button.js';

class MainMenuContainer extends Component {
	render() {
		return(
			<View style={{
				flex: 1,
				width: 5,
				flexDirection: 'column',
				alignItems: 'stretch',
				layoutOrigin: [0.5, 0.5],
				transform: [{translate: [0, 0, -5]}]
			}}>
				<Title />
				<Button />
			</View>
		)
	}
}

module.exports = MainMenuContainer;
