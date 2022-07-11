import React from "react";
import AuthorizedRoutes from './../../routes/AuthorizedRoutes.js'
import UnauthorizedRoutes from './../../routes/UnauthorizedRoutes'

////
const LoginController = () => {
    
 
  return (
    <div>
    <h1>Wecome to login controller</h1>
    <AuthorizedRoutes />
    <UnauthorizedRoutes />
  </div>
  );
};
export default LoginController;
