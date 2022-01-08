import { Redirect, useLocation } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { authContext } from '../contexts/AuthContextProvider';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {checkLogin} = useContext(authContext);
    
    if (!checkLogin) {
        return <Redirect to="auth" state={{from: location }} />
    }

    return children;
};

export { RequireAuth };