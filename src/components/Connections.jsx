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
      <div >
        <p className="text-4xl flex justify-center mt-30">No connections Found</p>
      </div>
    );
  }
  return (
   <div className="max-w-lg mx-auto my-10 space-y-4">
  {connections.map((user) => (
    <div
      key={user._id}
      className="bg-base-200 flex items-center gap-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
    >
      {/* Photo */}
      <img
        src={user.photourl}
        alt="avatar"
        className="w-16 h-16 rounded-full object-cover"
      />

      {/* Info Section */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">
          {user.firstname} {user.lastname}
        </h2>

        {/* Age & Gender */}
        <p className="text-sm text-gray-500">
          {user.age} • {user.gender}
        </p>

        {/* About */}
        <p className="text-sm text-gray-700 mt-1">{user.about}</p>

        {/* Skills */}
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
