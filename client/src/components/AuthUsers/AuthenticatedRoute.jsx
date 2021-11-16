import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthenticatedRoute = ({ component: C, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <C {...props} /> : <Redirect to={`/`} />
      }
    />
  );
};

export default AuthenticatedRoute;
