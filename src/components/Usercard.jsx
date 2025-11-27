import axios from "axios";
import { useNavigate } from "react-router";
import { Base_url } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { removeuserfeed } from "../Utils/Feedslice";
import { Handshake, EyeOff } from "lucide-react";

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
          <div
            className="px-3 py-[3px] rounded-lg 
     bg-linear-to-r from-[#1e1f25] to-[#131417]
     border border-[#31343a]
     text-xs text-[#338393a7] font-semibold tracking-wider
     shadow-[0_0_12px_rgba(255,211,105,0.45)]"
          >
            New Dev
          </div>
        </h2>

        {age && <p className="text-bold">{"Age-" + age}</p>}
        <p className="font-semibold">{"Gender-" + gender}</p>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
          {"Skills-" + skills}
        </p>

        <p
          className="overflow-hidden text-ellipsis font-semibold"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {aboutText}
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => handlesendrequest("ignored", _id)}
            className="w-12 h-12 flex items-center  mr-8 justify-center
      bg-[#1B1D23]/80 backdrop-blur-sm border border-[#2B2E35] rounded-xl
      text-gray-300 shadow-sm
      hover:bg-[#2C2F36] hover:border-[#ff4d4d]
      hover:shadow-[0_0_12px_rgba(255,77,77,0.45)]
      active:scale-90 transition-all duration-200"
          >
            <EyeOff size={21} strokeWidth={2.2} />
          </button>

          <button
            onClick={() => handlesendrequest("interested", _id)}
            className="w-12 h-12 flex items-center  ml-8 justify-center
      bg-[#1B1D23]/80 backdrop-blur-sm border border-[#2B2E35] rounded-xl
      text-gray-300 shadow-sm
      hover:bg-[#2C2F36] hover:border-[#00d084]
      hover:shadow-[0_0_12px_rgba(0,208,132,0.45)]
      active:scale-90 transition-all duration-200"
          >
            <Handshake size={21} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
