import React from "react";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div className="addUser">
      <h3>Welcome to Shoping_Zone</h3>
      <div className="login">
        <p>Already have an account?</p>
        <Link to="Login" type="submit" class="btn btn-primary">
          Login
        </Link>
      </div>
      <div className="login">
        <p>New User?</p>
        <Link to="/Signup" type="submit" class="btn btn-primary">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Index;
