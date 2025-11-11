import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailId, setemailId] = useState("sundarpichai@gmail.com");
  const [password, setpassword] = useState("Sundarpichai@123");

  const handlelogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailId,
        password,
      },
      {withCredentials:true}
    );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Where code meets connection, and ideas turn into innovation.
            </p>
          </div> 
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={emailId}
                  onChange={(e) => setemailId(e.target.value)}
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  className="btn btn-neutral text-white bg-red-500 mt-4 hover:bg-amber-50 hover:text-black"
                  onClick={handlelogin}
                >
                  Login
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
