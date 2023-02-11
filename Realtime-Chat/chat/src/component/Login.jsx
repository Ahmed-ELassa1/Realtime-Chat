import React from "react";
const Login = ({ handleChange, newUser, logNewUser }) => {
  return (
    <div className="login-card  text-center ">
      <div className=" login ">
        <div className="row login-page">
          <div className="col-12">
            <h5>Enter Username</h5>
          </div>
          <div className="d-flex justify-content-center py-1">
            <div className="col-12">
              <input
                type="text"
                name="username"
                id=""
                value={newUser}
                placeholder="User Name"
                className="form-control w-100 mb-3 login-inp"
                autoComplete="off"
                onChange={(e) => handleChange(e)}
                onKeyPress={(e) => (e.code === "Enter" ? logNewUser() : null)}
              />
              <button className="btn btn-success w-100" onClick={logNewUser}>
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
