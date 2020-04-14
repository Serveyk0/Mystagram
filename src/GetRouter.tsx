import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Registration from './components/Login/Registration';
import MainPage from './components/MainPage';
import { ROUTE_MAIN_PAGE, ROUTE_EMAIL, ROUTE_PASSWORD, ROUTE_REGISTRATION_ANSWER, ROUTE_SIGN_IN, ROUTE_PROFILE } from './constants/Routes'
import SignIn from './components/Login/SignIn';
import Profile from './components/Profile';

export const GetRouter: React.FC = ( ) => {
	return(
        <Switch>
        <Route exact path={ ROUTE_MAIN_PAGE } render={() => {return(
            <MainPage />
        )}} />
        <Route exact path={ ROUTE_EMAIL } render={() => {return(
            <Registration />
        )}} />
        <Route exact path={ ROUTE_PASSWORD } render={() => {return(
            <Registration />
        )}} />
        <Route exact path={ ROUTE_REGISTRATION_ANSWER } render={() => {return(
            <Registration />
        )}} />
        <Route exact path={ ROUTE_SIGN_IN } render={() => {return(
            <SignIn />
        )}} />
        <Route exact path={ ROUTE_PROFILE } render={() => {return(
            <Profile />
        )}} />
        </Switch>
    )
};