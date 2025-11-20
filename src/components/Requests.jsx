import axios from "axios";
import { Base_url } from "../Utils/constants";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addrequests } from "../Utils/Requestslice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchrequests = async () => {
    try {
      const res = await axios.get(Base_url + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addrequests(res.data.data));
    } catch (err) {
      navigate("/error");
    }
  };

  useEffect(() => {
    fetchrequests();
  }, []);

  if (!requests) return null;

  if (requests.length === 0) {
    return (
      <div>
        <p className="text-4xl flex justify-center mt-30">No Requests Found</p>
      </div>
    );
  }
  console.log(requests);

  return (
    <div>
      <h2 className="text-2xl text-white flex justify-center font-bold">
        Requests
      </h2>
      <div className="max-w-4xl mx-auto my-10 space-y-4">
        {requests.map((user) => (
          <div
            key={user._id}
            className="bg-base-200 flex items-center gap-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <img
              src={user?.fromUserId?.photourl}
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover"
            />

            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                {user?.fromUserId?.firstname} {user?.fromUserId?.lastname}
              </h2>
              <p className="text-sm text-gray-500">
                {user.age} • {user?.fromUserId?.gender}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {user?.fromUserId?.about}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {user?.fromUserId?.skills?.map((skill, i) => (
                  <span key={i} className="badge badge-outline text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <button className="btn btn-neutral mx-4">Accept</button>
              <button className="btn btn-neutral">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
