import React, { memo } from "react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Button, Input } from "core/ui";
import { useInputState } from "core/forms";
import { AuthActions } from "../redux";

const RegisterBase = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useInputState("");
  const [password, setPassword] = useInputState("");

  const register = () => {
    dispatch(AuthActions.register(username, password));
  };

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
      <Button
        style={{ marginTop: 14 }}
        name="register"
        onClick={register}
        label="Register"
        id="register"
        disabled={username.length < 3 && password.length < 3}
      />
    </>
  );
};

export const Register = memo(RegisterBase);
