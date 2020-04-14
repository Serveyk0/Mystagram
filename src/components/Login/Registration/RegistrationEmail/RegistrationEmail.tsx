import React from 'react'
import './RegistrationEmail.sass'
import { ROUTE_PASSWORD } from '../../../../constants/Routes'
import { NavLink } from 'react-router-dom'



export const RegistrationEmail = ( props: any ) => {
    
    const handleChangeEmail = () => (e: { target: { value: string; }; }) => {
        props.setUserName(e.target.value);
    }
    
    return (
        <>
            <div className='EmailRegistrationPage'>
                <div className='EmailRegistrationBlock'>
                    <div className='EmailText'>
                        <h2 className='InputEmailAddress'>Введите эл.адрес почты</h2>
                        <h2 className='EmailAddress'>Адрес эл.почты</h2>
                        <div className='Line' />
                    </div>
                    <div className='InputEmailBlock'>
                        <input className='InputEmail' onChange={handleChangeEmail()} placeholder='email'/>
                    </div>
                    <NavLink to={ ROUTE_PASSWORD } className='Next'>Далее</NavLink>
                </div>
            </div>
        </>
    )
}