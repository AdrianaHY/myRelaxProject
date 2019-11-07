import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-360';

class Title extends Component {
	render() {
		return (
			<View style={{ margin: 0.1, height: 0.5}}>
				<Text style={{
					fontSize: 1,
					fontWeight: '400',
					textAlign: 'center',
					textAlignVertical: 'center'
				}}>
					Ataraxia
				</Text>
			</View>
		)
	}
}

module.exports = Title;