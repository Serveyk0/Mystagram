// import React from 'react';
// import './Registration.sass';
// // /components/Auth/Register.js
// import firebase from '../../../firebase'
// import { error } from 'console';
// // import { Link } from 'react-router-dom';

// export interface stateType {
//   username: any
//   email: any
//   password: any
//   error: any
//   log: any
// }

// export class  Registration extends React.Component{

// 		state:stateType = {
// 			username: '',
// 			email: '',
// 			password: '',
//       error: null,
//       log: false
// 		}

// 	handleChange = (e: any) => {
// 		this.setState({[e.target.name]: e.target.value});
// 	}
//   handleSubmit = (e: any) => {
//     e.preventDefault();
//     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
//     }).then((u)=>{console.log(u)})
//     .catch((errorr: any) => {
//       this.setState({error: errorr});
//       })
// }


// login = (e:any) => {
//   e.preventDefault();
//   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
//   }).catch((errorr: any) => {
//     this.setState({error: errorr});
//     });
    
//     this.setState({log: true});
// }

// 	render(){
//     //@ts-ignore
//     const {email, username, password, error, log} = this.state;
//     console.log(log);
// 		return(
// 			<div className="auth--container">
// 				<h1>Register your account</h1>
// 				{error && <p className="error-message">{error.message}</p>}
// 				<form onSubmit={this.handleSubmit}>
// 					<label htmlFor="username">Username</label>
// 					<input type="text" name="username" id="username" value={username} onChange={this.handleChange} />
// 					<label htmlFor="email">Email address</label>
// 					<input type="text" name="email" id="email" value={email} onChange={this.handleChange} />
// 					<label htmlFor="password">Choose a password</label>
// 					<input
// 						type="password"
// 						name="password"
// 						id="password"
// 						value={password}
// 						onChange={this.handleChange}
// 					/>
// 					<button className="general-submit" children="Get Started" />
// 					{/* <p>Already have an account? <Link className="login-btn" to="/login">Login here</Link></p> */}
// 				</form>
//         <button className="general-submit" onClick={this.login}>login</button>
// 			</div>
// 		);
// 	}
// }

import React, { useState, useEffect} from 'react'
import './Registration.sass'
import PasswordRegistration from './RegistrationPassword'
import { Switch, Route } from 'react-router-dom'
import EmailRegistration from './RegistrationEmail'
import { ROUTE_EMAIL, ROUTE_PASSWORD, ROUTE_REGISTRATION_ANSWER } from '../../../constants/Routes';
import RegistrationAnswer from './RegistrationAnswer'

export const Registration: React.FC = ( ) => {

	const [userName, setUserName]: [string, Function] = useState("");
	const [userPassword, setUserPassword]: [string, Function] = useState("");

    return (
        <>
            <div className='RegistrationPage'>
                <div className='RegistrationBlock'>
                <Switch>
                    <Route path={ ROUTE_EMAIL }>
                        <EmailRegistration setUserName={setUserName} />
                    </Route>
                    <Route path={ ROUTE_PASSWORD }>
                        <PasswordRegistration setUserPassword={setUserPassword} />
                    </Route>
                    <Route path={ ROUTE_REGISTRATION_ANSWER }>
                        <RegistrationAnswer userName={userName} userPassword={userPassword} />
                    </Route>

                    
				</Switch>
                </div>
                <div>
                    <div className='FooterLine' />
                    <p className='FooterText'>У вас уже есть аккаунт? <span className='SignIn'>Выполните вход</span></p>
                </div>
            </div>
        </>
    )
}