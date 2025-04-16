import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center text-uppercase text-success fw-bold">Signup</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Enter username" autoComplete="off" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" autoComplete="off" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="off" />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile No.</label>
            <input type="text" className="form-control" id="mobile" placeholder="Enter mobile number" autoComplete="off" />
          </div>
          <button type="submit" className="btn btn-success w-100">Signup</button>
        </form>
        <div className="text-center mt-3">
          <p className="mb-0">Already a user? <Link to="/login" >Login</Link></p>
        </div>
        <div className="text-center">
            <p> <Link to="/" className="list-inline-item">Home</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;