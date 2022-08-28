import React from "react";
import { Route, Redirect,} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    const isAuthenticated = false;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated 
          ? (children) 
          : (
              <Redirect
                to={{
                  pathname: "/user/login",
                  state: { from: location }
                }}
              />
            )
        }
      />
    );
  }

export default PrivateRoute;