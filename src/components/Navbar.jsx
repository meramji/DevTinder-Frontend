import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { Base_url } from "../Utils/constants";
import { removeusers } from "../Utils/userSlice";
import { useState } from "react";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [optionopen, setoptionopen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(Base_url + "/logout", {}, { withCredentials: true });
      dispatch(removeusers());
      setoptionopen(false);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogoClick = (e) => {
    if (!user) {
      e.preventDefault();
      return;
    }
    setoptionopen(false);
    navigate("/feed");
  };

  const toggleDropdown = () => {
    setoptionopen((prev) => !prev);
  };

  return (
    <div className="flex justify-center">
      <div className="navbar bg-base-300 shadow-sm w-full mx-4 my-4 px-4 rounded-xl">
        <div className="flex-1">
          <button
            onClick={handleLogoClick}
            className="btn btn-ghost normal-case text-xl hover:bg-base-200"
          >
            DevTinder
          </button>
        </div>

        {user && (
          <div className="flex gap-2 relative">
            <p className="mt-2">{"Welcome, " + user.firstname}</p>

            <div
              onClick={toggleDropdown}
              className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <div className="w-10 rounded-full">
                <img alt="User avatar" src={user.photourl} />
              </div>
            </div>

            {optionopen && (
              <ul className="absolute right-0 top-14 bg-base-100 rounded-box shadow z-50 w-52 p-2 menu menu-sm">
                <li>
                  <Link to="/profile" onClick={() => setoptionopen(false)}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/Feed" onClick={() => setoptionopen(false)}>
                    Explore
                  </Link>
                </li>
                <li>
                  <Link to="/connections" onClick={() => setoptionopen(false)}>
                    Connections
                  </Link>
                </li>
                <li>
                  <Link to="/requests" onClick={() => setoptionopen(false)}>
                    Requests
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
