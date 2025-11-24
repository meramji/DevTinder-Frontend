import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addusers } from "../Utils/userSlice";
import { useNavigate } from "react-router";
import { Base_url } from "../Utils/constants";

const Login = () => {
  const [emailId, setemailId] = useState("MarkZuckerberg@gmail.com");
  const [password, setpassword] = useState("Mark@123");
  const [firstname, setfirstname] = useState("");
  const [secondname, setsecondname] = useState("");
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

  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col items-center py-10 px-4">
      <div className="flex justify-center mb-8 w-full">
        <div className="flex gap-4">
          <button
            className="px-8 py-2 text-sm sm:text-base font-semibold text-white rounded-full bg-linear-to-r from-red-600 to-pink-600 shadow-xl hover:scale-105 transition-all duration-300 ease-out"
            onClick={() => setislogin(true)}
          >
            Login
          </button>

          <button
            className="px-8 py-2 text-sm sm:text-base font-semibold  rounded-full bg-base-100   bg-linear-to-r from-pink-500 to-purple-500 text-white shadow-xl hover:scale-105 transition-all duration-300 ease-out"
            onClick={() => setislogin(false)}
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
                    value={secondname}
                    onChange={(e) => setsecondname(e.target.value)}
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
              className="btn w-full font-semibold bg-linear-to-r from-red-500 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              onClick={handlelogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
