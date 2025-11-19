import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { Base_url } from "../Utils/constants";
import { addusers, removeusers } from "../Utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(user);
  const handleLogout = async () => {
    try {
      await axios.post(Base_url + "/logout", {}, { withCredentials: true });
      dispatch(removeusers());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="navbar bg-base-300 shadow-sm w-full  mx-4 my-4 px-4 rounded-xl">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl hover:bg-base-200"
          >
            DevTinder
          </Link>
        </div>

        {user && (
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform duration-200"
              >
                <div className="w-10 rounded-full">
                  <img alt="User avatar" src={user.photourl} />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/connections"}>connections</Link>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
