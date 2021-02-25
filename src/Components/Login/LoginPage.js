import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username.length > 8 && username.length < 16 && password.length > 6) {
      history.push("/search");
    }
  }
  return (
    <>
      <h1 className="text-center">SIGN IN</h1>
      <div className="container">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" onClick={() => login()}>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginPage;
