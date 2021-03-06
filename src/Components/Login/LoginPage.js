import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setUser } from "../../Redux/Actions";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(props) {
    if (username.length > 8 && username.length < 16 && password.length > 6) {
      props.setUser(username);
      history.push("/search");
    }
  }
  return (
    <>
      <h1 className="text-center">LOG IN</h1>
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
      <div>
        <NavLink to="/signup">New Users can Sign up HERE!</NavLink>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setUser,
};

function mapStateToProps(state) {
  return {
    username: state.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
