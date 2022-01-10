import { Redirect, useLocation } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { authContext } from '../contexts/AuthContextProvider';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {checkLogin} = useContext(authContext);
    // const checkLogin = localStorage.getItem('jwt-access');
    
    if (checkLogin === true) {
        return <Redirect to="/course" state={{from: location }} />
    }
    console.log(checkLogin);


    return console.log(checkLogin);
};

export { RequireAuth };