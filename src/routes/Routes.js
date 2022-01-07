import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext } from 'react/cjs/react.development';
import SingUp from '../components/Authentication/SingUp/SingUp';
import AuthContextProvider, { authContext } from '../contexts/AuthContextProvider';
import Auth from '../pages/Auth';
import ConfirmPage from '../pages/ConfirmPage';
import Course from '../pages/Course';
import Main from '../pages/Main';
const Routes = () => {
    // const {user} = useContext(Context);
    // const token = localStorage.getItem('jwt-access')
    // const {user} = useContext(authContext);

    return (
        // <AuthContextProvider>
        //     <BrowserRouter>
        //         <Switch>
        //             <Route exact path="/" component={Main} />
        //             <Route exact path="/auth" component={Auth} />
        //             <Route exact path="/confirm" component={ConfirmPage} />
        //             <Route exact path="/course" component={Course} />
        //             <Route exact path="/admin" component={SingUp} />
        //             <Redirect to={"/"} />
        //         </Switch>
        //     </BrowserRouter>
        // </AuthContextProvider>

        <AuthContextProvider>
         <BrowserRouter>
                <Switch>
                        <Route exact path="/" component={Auth} />
                        <Route exact path="/course" component={Course} />,
                        <Route exact path="/home" component={Main} />
                        <Route exact path="/admin" component={SingUp} />
                        <Route exact path="/confirm" component={ConfirmPage} />
                        <Route exact path="/auth" component={Auth} />
                        <Redirect to={"/"} />
                </Switch>
        </BrowserRouter>
        </AuthContextProvider>

    );
};

export default Routes;