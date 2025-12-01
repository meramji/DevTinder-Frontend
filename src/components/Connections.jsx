import axios from "axios";
import { Base_url } from "../Utils/constants";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addconnections } from "../Utils/Connectionslice";

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchconnections = async () => {
    try {
      const res = await axios.get(Base_url + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addconnections(res?.data?.data));
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  useEffect(() => {
    fetchconnections();
  }, []);

  if (!connections) return null;

  if (connections.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-xl font-semibold">No connections Found</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-6 space-y-6 mb-12 px-4">
      <h2 className="text-3xl text-white text-center font-bold tracking-wide mb-6">
        Connections
      </h2>

      {connections.map((user) => (
        <div
          key={user._id}
          className="
          bg-gray-800 border border-base-300 
          rounded-2xl shadow-md hover:shadow-xl 
          flex sm:flex-row flex-col sm:items-center items-start gap-5 p-5
          w-full
        "
        >
          <img
            src={user.photourl}
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover shadow-sm
          hover:scale-[1.03] transition-all duration-300"
          />

          <div className="flex-1 w-full space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">
                {user.firstname} {user.lastname}
              </h2>
              {user.age && user.gender && (
                <span className="text-gray-400 text-sm font-semibold sm:block">
                  {user.age} • {user.gender}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-300 line-clamp-2">{user.about}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {user.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="badge badge-outline text-sm px-3 py-1 rounded-md 
              bg-base-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Connections;
