import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center text-uppercase text-info fw-bold">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" autoComplete="off" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="off" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <p className="mb-0">New user? <Link to="/signup">Signup</Link></p>
        </div>
        <div className="text-center">
          <p> <Link to="/">Home</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;