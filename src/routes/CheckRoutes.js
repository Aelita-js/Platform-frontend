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