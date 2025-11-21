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
      // console.log(res?.data?.data);

      dispatch(addconnections(res?.data?.data));
    } catch (err) {
      navigate("/error");
    }
  };

  useEffect(() => {
    fetchconnections();
  }, []);

  if (!connections) return null;

  if (connections.length === 0) {
    return (
      <div>
        <p className="text-4xl flex justify-center mt-30">
          No connections Found
        </p>
      </div>
    );
  }
  return (
    <div className="max-w-lg mx-auto my-2 space-y-4 mb-7">
      <h2 className="text-2xl text-white flex justify-center font-bold mb-5">
        Connections
      </h2>
      {connections.map((user) => (
        <div
          key={user._id}
          className="bg-base-200 flex items-center gap-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <img
            src={user.photourl}
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div className="flex-1">
            <h2 className="text-lg font-semibold">
              {user.firstname} {user.lastname}
            </h2>
            <p className="text-sm text-gray-500">
              {user.age} • {user.gender}
            </p>

            <p className="text-sm text-gray-500 mt-1">{user.about}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {user.skills?.map((skill, i) => (
                <span key={i} className="badge badge-outline text-xs">
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
