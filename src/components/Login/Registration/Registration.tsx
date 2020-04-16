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