import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {

	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Login"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#b49e98',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:26,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:18
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:19,
  	fontWeight:'500'
  }
});
