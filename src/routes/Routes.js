import React from 'react';
import { Redirect, Route,  Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import SingUp from '../components/Authentication/SingUp/SingUp';
import AuthContextProvider from '../contexts/AuthContextProvider';
import Auth from '../pages/Auth';
import ConfirmPage from '../pages/ConfirmPage';
import Course from '../pages/Course';
import Main from '../pages/Main';
import { RequireAuth } from '../hoc/RequireAuth';

const Routes = () => {
    // const PrivRoute = (isAuth, children) => {
    //     return isAuth ? children : <Redirect to="auth"/>
    // }

    const PrivRoute = (children) => {
        const isToken = localStorage.getItem('jwt-access');
        return isToken ? children : <Redirect to="auth"/>
    }


    return (
        // <AuthContextProvider>
        //     <BrowserRouter>
        //         <Switch>
        //             {/* <Route exact path="/" component={Auth} /> */}
        //             <Route exact path="/auth" component={Auth} />
        //             <Route exact path="/" component={
        //                 <RequireAuth>
        //                     {/* <Main /> */}
        //                     <Course/>
        //                 </RequireAuth>
        //             } />
        //             <Route exact path="/confirm" component={ConfirmPage} />
        //             {/* <Route exact path="/course" component={Course} /> */}
        //             <Route exact path="/admin" component={SingUp} />
        //             <Redirect to={"/"} />
        //         </Switch>
        //     </BrowserRouter>
        // </AuthContextProvider>

        // <AuthContextProvider>
        //     <BrowserRouter>
        //             <Route exact path="/home" component={Main} />
        //         <Switch>
        //             <Route exact path="/course" component={
        //                 <PrivRoute>
        //                     <Course />
        //                 </PrivRoute>
        //             }/>
        //         </Switch>
        //     </BrowserRouter>
        // </AuthContextProvider>


        <AuthContextProvider>
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path="/" component={Auth} /> */}
                    <Route exact path="/auth" component={Auth} />
                    <Route exact path="/admin" component={SingUp} />
                    <Route exact path="/confirm" component={ConfirmPage} />
                    <Route exact path="/course" component={Course} />
                    <Route exact path="/" component={Main} />
                    <Redirect to={"/"} />                    
                </Switch>
            </BrowserRouter>
        </AuthContextProvider>

    );
};

export default Routes;