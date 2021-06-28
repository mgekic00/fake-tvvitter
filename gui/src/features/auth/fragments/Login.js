import React, { memo, useEffect } from "react";
import { Button, Input } from "core/ui";
import { useDispatch } from "react-redux";
import { AuthActions } from "../redux";
import { useInputState } from "core/forms";
import { useSelector } from "react-redux";
import { AuthSelectors } from "features/auth";
import { loginInfoSlice } from "../redux/slices";

const LoginBase = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginInfoSlice.actions.setWrongCredentials(false));
  }, [dispatch]);

  const [username, setUsername] = useInputState("");
  const [password, setPassword] = useInputState("");
  const login = () => dispatch(AuthActions.login(username, password));
  const wrongCredentials = useSelector(AuthSelectors.wrongCredentials);

  return (
    <>
      <Input
        placeholder="Username"
        name="username"
        onChange={setUsername}
        value={username}
        type="text"
      />
      <Input
        placeholder="Password"
        name="password"
        onChange={setPassword}
        value={password}
        type="password"
      />
      {wrongCredentials && <p style={{ color: "red" }}>Wrong Credentials!</p>}
      <Button
        style={{ marginTop: 14 }}
        name="login"
        onClick={login}
        disabled={username.length < 3 && password.length < 3}
        label="Login"
        id="login"
      />
    </>
  );
};

export const Login = memo(LoginBase);
