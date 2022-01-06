import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '..';
import SingUp from '../components/Authentication/SingUp/SingUp';
import AuthContextProvider from '../contexts/AuthContextProvider';
import Auth from '../pages/Auth';
import ConfirmPage from '../pages/ConfirmPage';
import Course from '../pages/Course';
import Main from '../pages/Main';
const Routes = () => {
    // const {user} = useContext(Context);

    return (
        <AuthContextProvider>
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/auth" component={Auth} />
                    <Route exact path="/confirm" component={ConfirmPage} />
                    <Route exact path="/course" component={Course} />
                    <Route exact path="/admin" component={SingUp} />
                    <Redirect to={"/"} />
                </Switch>
        </BrowserRouter>
        </AuthContextProvider>

        // <BrowserRouter>
        //         <Switch>
        //             {
        //                 user.isAuth && (
        //                 <Route exact path="/" component={Main} />,
        //                 <Route exact path="/course" component={Course} />,
        //                 <Route exact path="/admin" component={SingUp} />
        //             )}
        //                 <Route exact path="/confirm" component={ConfirmPage} />
        //                 <Route exact path="/auth" component={Auth} />
        //                 <Redirect to={"/"} />
        //         </Switch>
        // </BrowserRouter>
    );
};

export default Routes;