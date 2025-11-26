import axios from "axios";
import { useNavigate } from "react-router";
import { Base_url } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { removeuserfeed } from "../Utils/Feedslice";

const Usercard = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlesendrequest = async (status, userid) => {
    try {
      await axios.post(
        Base_url + "/request/send/" + status + "/" + userid,
        {},
        { withCredentials: true }
      );
      dispatch(removeuserfeed(userid));
    } catch (err) {
      navigate("/error");
    }
  };

  const { _id, photourl, age, firstname, lastname, about, gender, skills } =
    user;

  const aboutText =
    typeof about === "string" && about.length > 100
      ? about.slice(0, 100) + " ..."
      : about;

  return (
    <div className="card bg-base-300 w-[450px] shadow-sm h-[721px]">
      <div className="w-full h-[456px]">
        {photourl ? (
          <img
            className="object-cover h-full w-full"
            src={photourl}
            alt="avatar"
          />
        ) : null}
      </div>

      <div className="card-body">
        <h2 className="card-title text-xl">
          {firstname + "  " + lastname}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        {age && <p className="text-bold">{"Age-" + age}</p>}
        <p>{"Gender-" + gender}</p>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
          {"Skills-" + skills}
        </p>

        <p
          className="overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {aboutText}
        </p>

        <div className="card-actions space-x-11 justify-center">
          <button
            className="btn btn-neutral"
            onClick={() => handlesendrequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-neutral"
            onClick={() => handlesendrequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
