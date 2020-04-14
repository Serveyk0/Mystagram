import React, { useEffect, useState } from 'react'
import './RegistrationAnswer.sass'
import firebase from '../../../../firebase'
import { NavLink } from 'react-router-dom'
import { ROUTE_SIGN_IN, ROUTE_MAIN_PAGE } from '../../../../constants/Routes'
import { SUCESS_REGISTRATION, NOT_INPUT } from './constants'

export const RegistrationAnswer = ( props: any ) => {
    
    const [answer, setAnswer] = useState(SUCESS_REGISTRATION);

    useEffect(() => {
        props.userName.trim() != '' && props.userPassword.trim() != '' ?
        firebase.auth().createUserWithEmailAndPassword(props.userName, props.userPassword).then((u)=>{
        }).then((u)=>{console.log(u)})
            .catch((errorr: string) => {
            setAnswer(errorr);
            
        })
        :
        setAnswer(NOT_INPUT);
    }, [])

    return (
        <>
            <div className='EmailRegistrationPage'>
                <p className='Answer'>{answer}</p>
                {answer == SUCESS_REGISTRATION && <NavLink to={ ROUTE_SIGN_IN } className='Next'>Войти</NavLink>}
                {answer == NOT_INPUT && <NavLink to={ ROUTE_MAIN_PAGE } className='Next'>На главную</NavLink>}
            </div>
        </>
    )
}