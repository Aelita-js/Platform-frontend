import React from 'react';
import { Route } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { authContext } from '../contexts/AuthContextProvider';

const CheckRoutes = () => {
    const {checkLogin} = useContext(authContext);

    if (checkLogin === true) {
        return true
    } else {
        return false
    }

};

export default CheckRoutes;



// ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? ! ? !



// import React from 'react';
// import { withRouter } from 'react-router';

// export default function requireAuth(Component) {

//   class AuthenticatedComponent extends React.Component {

//     componentWillMount() {
//       this.checkAuth();
//     }

//     checkAuth() {
//       if ( ! this.props.isLoggedIn) {
//         const location = this.props.location;
//         const redirect = location.pathname + location.search;

//         this.props.router.push(`/login?redirect=${redirect}`);
//       }
//     }

//     render() {
//       return this.props.isLoggedIn
//         ? <Component { ...this.props } />
//         : null;
//     }

//   }

//   return withRouter(AuthenticatedComponent);
// }

// <Route handler={requireAuth(Todos)} name="todos"/>

// ==================================================================================================

// import { Route, Redirect } from 'react-router'

// <Route exact path="/" render={() => (
//   loggedIn ? (
//     <Redirect to="/dashboard"/>
//   ) : (
//     <PublicHomePage/>
//   )
// )}/>

// ! =============================================================================================

// let hasUserAccess = false;

// function privateRoute(Component) {
//   return function(props) {
//     if (!hasUserAccess) {
//       return <Page404 />;
//     }
//     return <Component {...props} />;
//   };
// }

// <Route path="/path" component={privateRoute(Component)} /> 

// ! =============================================================================================
