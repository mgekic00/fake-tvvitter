import React, { memo } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSubroutes } from "core/navigation";
import { Container, Text } from "core/ui";
import { AuthRoutes } from "../routes";
import { Login } from "./Login";
import { Register } from "./Register";

const AuthBase = () => {
  // todo: capitalization conventions debatable in this case
  const routes = useSubroutes(AuthRoutes);

  return (
    <Container>
      <Route path={routes.LOGIN}>
        <Login />
        <Text style={{ marginTop: 36 }}>
          No user account?{" "}
          <Text variant="link">
            <Link to={routes.REGISTER}>Create account</Link>
          </Text>
        </Text>
      </Route>
      <Route path={routes.REGISTER}>
        <Register />
        <Text style={{ marginTop: 36 }}>
          Already have account?{" "}
          <Text variant="link">
            <Link to={routes.LOGIN}>Login</Link>
          </Text>
        </Text>
      </Route>
      <Redirect to={routes.LOGIN} />
      <ToastContainer autoClose={2000} />
    </Container>
  );
};

export const Auth = memo(AuthBase);

// optional, just for lazy loading
export default Auth;
