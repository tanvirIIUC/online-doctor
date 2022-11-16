import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivetRouter = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext) 
    if(loading){
      return <button className="btn  loading"></button>
    }
    if(user){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
    
};

export default PrivetRouter;
