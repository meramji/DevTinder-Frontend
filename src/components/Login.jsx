import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addusers } from "../Utils/userSlice";
import { useNavigate } from "react-router";
import { Base_url } from "../Utils/constants";

const Login = () => {
  const [emailId, setemailId] = useState("MarkZuckerberg@gmail.com");
  const [password, setpassword] = useState("Mark@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, seterror] = useState("");

  const handlelogin = async () => {
    try {
      const res = await axios.post(
        Base_url + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      // console.log(res.data);
      dispatch(addusers(res.data));
      navigate("/feed");
    } catch (err) {
      seterror(err?.response?.data || "something went wrong");
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
                {/* <p className="text-red-400">{error}</p> */}
                <label className="label">Password</label>

                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <p className="text-red-400">
                  {error ? "Entered Invalid data" : ""}
                </p>
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
