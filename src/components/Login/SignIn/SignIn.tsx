import React, { useEffect, useState } from 'react'
import './SignIn.sass'
import { NavLink, Redirect, Route } from 'react-router-dom';
import { ROUTE_FORGOT_PASSWORD, ROUTE_PROFILE, ROUTE_EMAIL } from '../../../constants/Routes'
import firebase from '../../../firebase'
import { connect } from 'react-redux';

const SignIn = ( props: any ) => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState("err");
    // const [changeUserId] = props;

    const handleChangeEmail = () => (e: { target: { value: string; }; }) => {
        setUserEmail(e.target.value);
    }
    
    const handleChangePassword = () => (e: { target: { value: string; }; }) => {
        setUserPassword(e.target.value);
    }

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then((u: any)=>{     
            setError('');
            const userId = u.user.uid;
            props.changeUserId(userId);
            const dataRef = firebase.database().ref('/users');
            console.log(dataRef.orderByChild(userId).equalTo("sergo"))
            if(!dataRef.equalTo(userId))
                dataRef.child(userId).set({nickname:''});

        }).catch((errorr: any) => {
            setError(errorr);   
        })
    }
    
    if(error == '')
        window.location.href = '#' + ROUTE_PROFILE;

    return (
        <>
            <div className='SignIn'>
                <div className='MainAuthorizationBlock'>
                    {error != 'err' && error != '' && <p className='LoginAndPassword'>Логин или пароль введён неправильно'</p>}
                    <h1 className='AuthorizationTitle'>Mystagram</h1>
                    <div className='LoginForm'>
                        <input className='InputData' onChange={handleChangeEmail()} placeholder='email'/>
                        <input className='InputData' onChange={handleChangePassword()} placeholder='пароль'/>
                        <NavLink to={ ROUTE_FORGOT_PASSWORD } className='ForgotPassword'>Забыл пароль</NavLink>
                        <button onClick={login} className='SignInButton'>Войти</button>
                    </div>
                    <div className='OrBlock'>
                        <p className='Or'>или</p>
                        <p className='NotAccount'>У вас нет аккаунта? <NavLink to={ ROUTE_EMAIL } className='Registration'>Зарегистрироваться</NavLink></p>
                    </div>
                </div>
                <div className='FooterMystagramBlock'>
                    <p className='FooterMystagram'>Mystagram от Mybook</p>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => {
	return {
      userId: state.userId,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeUserId: (uID: string) => {
            dispatch({ type: 'USER_ID', userId: uID });
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn); 