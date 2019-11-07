import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  VrButton
} from 'react-360';
import MainMenu from './vr/Components/Scenes/MainMenu.js';

const {AudioModule} = NativeModules;

export default class myRelaxProject extends React.Component {
  render() {
	AudioModule.createAudio('forest', {
		source: asset('forest-atmosphere.mp3'),
		is3d: true,
	  });

	AudioModule.play('forest', {
	position: [3, 0, 0],
	});

    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          {/* <Text style={styles.greeting}>
            Welcome to React 360
		  </Text> */}
		  <MainMenu />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('myRelaxProject', () => myRelaxProject);
