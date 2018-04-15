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

export default class Signup extends Component<{}> {

  goBack() {
      Actions.pop();
  }

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
    //  componentDidMount() {
    //  this.unsubscriber = firebase.auth().onAuthStateChanged((changedUser) => {
    //      console.log(`changed User : ${JSON.stringify(changedUser.toJSON())}`);
    //      this.setState({ user: changedUser });//
  //    });
  //}
  componentWillUnmount() {
      if (this.unsubscriber) {
          this.unsubscriber();
      }
  }
  onRegister = () => {
      firebase.auth().createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
          .then((loggedInUser) => {
              this.setState({ user: loggedInUser })
              console.log(`Register with user : ${JSON.stringify(loggedInUser.toJSON())}`);
          }).catch((error) => {
              console.log(`Register fail with error: ${error}`);
          });
  }

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
        <View style={styles.container}>
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
                        }
                      }
                />
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}
                onChangeText={
                         (text) => {
                             this.setState({ typedPassword: text });
                         }
                       }
                />
                <Button containerStyle={{
                            padding: 10,
                            margin: 10,
                            borderRadius: 25,
                            backgroundColor: '#841584',
                            width:300
                        }}
                            style={{ fontSize: 17, color: 'white' }}
                            onPress={this.onRegister}
                        >Kayıt Ol</Button>



    		                 </View>

				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
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
  	color:'#ffffff',
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
