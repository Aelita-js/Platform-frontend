import React from 'react';
import { Redirect, Route,  Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import SingUp from '../components/Authentication/SingUp/SingUp';
import AuthContextProvider from '../contexts/AuthContextProvider';
import Auth from '../pages/Auth';
import ConfirmPage from '../pages/ConfirmPage';
import Course from '../pages/Course';
import Main from '../pages/Main';

const Routes = () => {

        const isAuthenticated = () => {
            return localStorage.getItem('jwt-access');
        }

    function PrivateRoute({ component: Component, ...rest }) {
        return (
          <Route
            {...rest}
            render={props =>
              isAuthenticated() ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/",
                  }}
                />
              )
            }
          />
        );
      }
      
    // const Private = () => {
    // }


    return (

        <AuthContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Auth} />
                    <Route exact path="/admin" component={SingUp} />
                    <Route exact path="/confirm" component={ConfirmPage} />
                        <>
                      {/* <PrivateRoute  exact path="/confirm" component={ConfirmPage} /> */}
                      <PrivateRoute  exact path="/home" component={Main} />
                      {/* <PrivateRoute  exact path="/admin" component={SingUp} /> */}
                      <PrivateRoute  exact path="/course" component={Course} />
                      <Route render={() => <Redirect to={{pathname: "/home"}} /> } />
                        </>
                </Switch>
            </BrowserRouter>
        </AuthContextProvider>

    );
};

export default Routes;