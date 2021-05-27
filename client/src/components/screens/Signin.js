import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="mycard">
      <div className="class auth-card input-field">
        <h2>ROOMWALA</h2>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button className="btn waves-effect waves-light #64b5f6 black darken-1">
          Login
        </button>

        <h5>
          <Link to="/signup">Dont have an account ?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;

