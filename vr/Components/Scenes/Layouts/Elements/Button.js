import React, { Component } from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-360';

class Button extends Component {
	render() {
		return(
			<View style={{
				margin: 0.3,
				height: 0.3,
			}}>
				<VrButton>
					<Text style={{fontSize: 0.4, textAlign: 'center'}}>
						Select your favorite place
					</Text>
				</VrButton>
			</View>
		)
	}
}

module.exports = Button;