import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function signUp() {
    if (username.length > 8 && username.length < 16 && password.length > 6) {
      history.push("/login");
    }
  }
  return (
    <>
      <h1 className="text-center">Create an ACCOUNT</h1>
      <div className="container">
        <label htmlFor="username">Create a Username</label>
        <input
          type="text"
          placeholder="Must be between 8 and 16 characters"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Create a Password</label>
        <input
          type="password"
          placeholder="Must be 8 or more characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" onClick={() => signUp()}>
          Sign up
        </button>
      </div>
      <div>
        <NavLink to="/login">
          Already a user - Click here to go back to LOGIN
        </NavLink>
      </div>
    </>
  );
};

export default SignUpPage;
