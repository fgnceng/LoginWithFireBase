import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import MainPage from './pages/MainPage';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="onRegister" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
					   <Scene key='goMain' component={MainPage} title="Main"/>
			    </Stack>
			 </Router>
			)
	}
}
