import React from 'react'
import './MainPage.sass'
import { NavLink } from 'react-router-dom'
import { ROUTE_EMAIL, ROUTE_SIGN_IN } from '../../constants/Routes'

export const MainPage = ( ) => {
    return (
        <>
            <div className='MainPage'>
                <div className='MainBlock'>
                    <h1 className='MainTitle'>Mystagram</h1>
                    <NavLink to={ ROUTE_EMAIL } className='CreateNewAccount'>Создать новый аккаунт</NavLink>
                    <NavLink to={ ROUTE_SIGN_IN } className='MainSignIn'>Войти</NavLink>
                </div>
                <div>
                    <div className='FooterLine' />
                    <p className='FacebookText'>Mystagram от Mybook</p>
                </div>
            </div>
        </>
    )
}