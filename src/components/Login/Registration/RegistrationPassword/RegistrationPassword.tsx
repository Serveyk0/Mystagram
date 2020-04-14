import React, { useState, useCallback } from 'react'
import './RegistrationPassword.sass'
import { ROUTE_REGISTRATION_ANSWER } from '../../../../constants/Routes'
import { NavLink } from 'react-router-dom';

export const RegistrationPassword = ( props: any ) => {
    
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    
    const handleChangePassword = (setPass: Function) => (e: { target: { value: string; }; }) => {
        setPass(e.target.value);
    }
    
    return (
        <>
            <div className='PasswordRegistrationPage'>
                <div className='PasswordRegistrationBlock'>
                    <div className='PasswordText'>
                        <h2 className='InputPasswordAddress'>Введите пароль</h2>
                        <h2 className='PasswordAddress'>Пароль</h2>
                        <div className='Line' />
                    </div>
                    <p className='CheckPassword'>
                        {(password.length < 6 && password.length > 0 && checkPassword.length > 0) ? "Пароль должен быть длинее 6 символов"
                        : checkPassword !="" && ("Пароли " + (password != checkPassword ? "не " : "") + "совпадают")}
                    </p>
                    <div className='InputPasswordBlock'>
                        <input className='InputPassword' onChange={handleChangePassword(setPassword)} placeholder='Пароль' />
                    </div>
                    <div className='InputPasswordBlock'>
                        <input className='InputPassword' onChange={handleChangePassword(setCheckPassword)} placeholder='Повторите пароль' />
                     </div>
                     <NavLink to={ ROUTE_REGISTRATION_ANSWER } onClick={ () => props.setUserPassword(password)} className='Next'>Далее</NavLink>
                </div>
            </div>
        </>
    )
}