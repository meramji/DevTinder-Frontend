import axios from "axios";
import { Base_url } from "../Utils/constants";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addrequests, removerequest } from "../Utils/Requestslice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reviewrequest = async (status, _id) => {
    try {
      await axios.post(
        Base_url + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removerequest(_id));
    } catch (err) {}
  };

  const fetchrequests = async () => {
    try {
      const res = await axios.get(Base_url + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addrequests(res.data.data));
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  useEffect(() => {
    fetchrequests();
  }, []);

  if (!requests) return null;

  if (requests.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-xl font-semibold">No Requests Found</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-3xl text-white flex justify-center font-bold mt-4">
        Requests
      </h2>

      <div className="max-w-4xl mx-auto my-8 space-y-4 px-3 sm:px-6">
        {requests.map((user) => (
          <div
            key={user._id}
            className="bg-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src={user?.fromUserId?.photourl}
                alt="avatar"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
              />

              <div>
                <h2 className="text-xl text-white font-semibold truncate max-w-[150px] sm:max-w-full">
                  {user?.fromUserId?.firstname} {user?.fromUserId?.lastname}
                </h2>
                <p className="text-sm text-white">
                  {user.fromUserId.age} • {user?.fromUserId?.gender}
                </p>
                <p className="text-white text-sm">{user?.fromUserId?.about}</p>
              </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-2 w-full sm:w-auto">
              <div className="flex sm:flex-row flex-col gap-3 w-full sm:w-auto">
                <button
                  onClick={() => reviewrequest("accepted", user._id)}
                  className="px-4 py-2 rounded-lg font-semibold bg-green-600 hover:bg-green-700 text-white shadow-md transition-all"
                >
                  Accept
                </button>

                <button
                  onClick={() => reviewrequest("rejected", user._id)}
                  className="px-4 py-2 rounded-lg font-semibold bg-red-600 hover:bg-red-700 text-white shadow-md transition-all"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
