import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addusers } from "../Utils/userSlice";
import { useNavigate } from "react-router";
import { Base_url } from "../Utils/constants";

const Login = () => {
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [error, seterror] = useState("");
  const [islogin, setislogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogin = async () => {
    try {
      const res = await axios.post(
        Base_url + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addusers(res.data));
      navigate("/feed");
    } catch (err) {
      seterror(err?.response?.data || "something went wrong");
      console.log(err);
    }
  };

  const handlesignup = async () => {
    try {
      const res = await axios.post(
        Base_url + "/signup",
        {
          firstname,
          lastname,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addusers(res?.data?.data));
      navigate("/profile");
    } catch (err) {
      seterror(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="hero bg-base-100 min-h-[75vh] flex flex-col items-center py-10 px-4">
      <div className="flex justify-center mb-8 w-full">
        <div className="flex gap-6 relative">
          <div className="absolute inset-0 -z-10 blur-2xl opacity-30">
            {islogin ? (
              <div className="w-40 h-12 bg-cyan-500 rounded-full mx-auto" />
            ) : (
              <div className="w-40 h-12 bg-fuchsia-500 rounded-full mx-auto translate-x-32" />
            )}
          </div>

          <button
            onClick={() => setislogin(true)}
            className={`px-8 py-2.5 rounded-full text-sm sm:text-base font-semibold 
        transition-all duration-300 border
        ${
          islogin
            ? "bg-neutral-900 text-white border-neutral-800 shadow-lg shadow-cyan-500/30 hover:bg-neutral-800"
            : "bg-neutral-800 text-gray-300 border-gray-700 hover:text-white hover:border-cyan-400"
        }`}
          >
            Login
          </button>

          <button
            onClick={() => setislogin(false)}
            className={`px-8 py-2.5 rounded-full text-sm sm:text-base font-semibold 
        transition-all duration-300 border
        ${
          !islogin
            ? "bg-neutral-900 text-white border-neutral-800 shadow-lg shadow-fuchsia-500/30 hover:bg-neutral-800"
            : "bg-neutral-800 text-gray-300 border-gray-700 hover:text-white hover:border-fuchsia-400"
        }`}
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-5xl gap-6">
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {islogin ? "Welcome Back" : "Signup now"}
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            {islogin
              ? "Explore ideas, connect with developers, and build innovation  together on DevTinder"
              : "Sign up to DevTinder and engage with a professional network of developers, exchange expertise, collaborate on real projects, and expand your career opportunities"}
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl w-full max-w-sm rounded-xl border border-gray-200">
          <div className="card-body p-6 space-y-4">
            {!islogin && (
              <>
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div>{" "}
              </>
            )}

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                value={emailId}
                onChange={(e) => setemailId(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              onClick={islogin ? handlelogin : handlesignup}
              className="w-full py-2.5 rounded-full font-semibold bg-blue-400 text-white shadow-md hover:shadow-xl hover:scale-[1.02]  active:scale-95 transition-all duration-300 ease-out"
            >
              {islogin ? "Login" : "Signup"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
