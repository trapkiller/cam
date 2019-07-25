/*import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';


const estilos = {
	estiloTexto:{
		fontSize: 30,
		backgroundColor:'cyan',
		textAlign:'center'
	},
	estiloView:{ 
		backgroundColor:'black',
		padding:5
	}
};
  

const App = () => {
	const { estiloTexto, estiloView } = estilos;
	//render() {
		return (
			<View style={estiloView}>
				<Text style={estiloTexto}>
					Gustavo Azevedo
				</Text>
			</View>
		); 
	//}; 
};

export default class Tudo{
	render () {
		return (
			<App/>
		);
	}
}

AppRegistry.registerComponent('cam', () => App);

import React, { useState } from "react";
import { AppRegistry,StyleSheet, TouchableOpacity, Text, ImageBackground, ScrollView, View, CameraRoll, PermissionsAndroid } from "react-native";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";

export default Camera = () => {
  const [imageUri, setImageUri] = useState(null);
  takePicture = async () => {
    try {
      if (this.camera) {
        const options = {
          quality: 0.5,
          base64: true,
          forceUpOrientation: true,
          fixOrientation: true
        };
        const { uri } = await this.camera.takePictureAsync(options);
        setImageUri(uri);
      }
    } catch (err) {
      alert(err.message);
    }
  }
  submitPicture = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Access Storage",
          message: "Access Storage for the pictures"
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await CameraRoll.saveToCameraRoll(imageUri);
      } else {
        console.log("Permissao de camera negada.");
      }
    } catch (err) {
      console.warn(err);
    }

    setImageUri(null);
  }

  return (
    imageUri ?
      <ImageBackground style={styles.preview} source={{ uri: imageUri }}>
        <ScrollView></ScrollView>
        <View style={styles.buttonsPreview}>
          <Icon name="times" size={25} color="#fff" onPress={() => setImageUri(null)} />
          <Icon name="check" size={25} color="#fff" onPress={() => submitPicture()} />
        </View>
      </ImageBackground>
      :
      <RNCamera
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        ref={camera => { this.camera = camera; }}
        style={styles.camera}
        type={RNCamera.Constants.Type.front}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
      >
        <TouchableOpacity onPress={takePicture} style={styles.button}>
          <Text>PICTURE</Text>
        </TouchableOpacity>
      </RNCamera>
  )
} 
const styles = StyleSheet.create({
  camera: {
    flex: 1
  },
  button: {
    alignSelf: "center",
    backgroundColor: "blue",
    color: "#fff"
  },
  preview: {
    width: "100%",
    height: "100%",
    flex: 1
  },
  buttonsPreview: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5 
  } 
}); 
AppRegistry.registerComponent('cam', () => Camera);*/



import React, {PureComponent}  from 'react';
import { AppRegistry, View, Image, Alert, TouchableOpacity, PermissionsAndroid, StyleSheet, StatusBar} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import CameraScreen from './src/components/CameraScreen';
import HomeScreen from './src/components/HomeScreen';
import FirstScreen from './src/components/FirstScreen';

const estilos = StyleSheet.create({
	principal: {
		backgroundColor: 'black',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
   		flex: 1,
   		flexDirection: 'column',
   		backgroundColor: 'black',
    },
	imagem: {
		margin: 5,
		width: 220,
		height: 220
	},
	preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    }

});

const AppNavigator = createStackNavigator (
	{
		First: {
			screen: FirstScreen,
			navigationOptions: () => ({header: null}),
		},
		Home: {
			screen: HomeScreen,
			navigationOptions: () => ({header: null}),
		},
		Camera: {
			screen: CameraScreen,
			navigationOptions: ({ navigation }) => ({ title: 'Camera',
    		}),
		},
	},
	{
		initialRouteName: 'First'
	}
);

const AppContainer = createAppContainer (AppNavigator);

export default class App extends PureComponent{
	render () {
		return (
			<AppContainer/>
		);
	}
}     

AppRegistry.registerComponent('cam', () => App);