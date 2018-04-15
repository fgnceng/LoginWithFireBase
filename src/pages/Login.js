import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,TextInput
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import firebase from 'react-native-firebase';
import Button from 'react-native-button';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {

  constructor(props) {
      super(props);
      this.unsubscriber = null;
      this.state = {
        isAuthenticated: false,
        typedEmail: '',
        typedPassword: '',
        user: null,
        };
      }
	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
         <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email"
            placeholderTextColor = "#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            onSubmitEditing={()=> this.password.focus()}
            onChangeText={
              (text) => {
                this.setState({ typedEmail: text });
                  }}/>

            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Şifre"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}
                onChangeText={
                         (text) => {
                          this.setState({ typedPassword: text });
               }}/>

              <Button containerStyle={{
                    padding: 10,
                    margin: 10,
                    borderRadius: 25,
                    backgroundColor: '#a09ce4',
                    width:300
                    }}
                style={{ fontSize: 17, color: 'white' }}
                onPress={this.onLogin}> Gİriş Yap</Button>

			  	<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Hesabınız yok mu?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Hesap Oluştur</Text></TouchableOpacity>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ec4101',
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'

  },

  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,255)',
  	fontSize:16
  },
  signupButton: {
  	color:'#a09ce4',
  	fontSize:19,
  	fontWeight:'500'

  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  }
});
