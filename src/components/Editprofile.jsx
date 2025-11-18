import { useState } from "react";
import Usercard from "./Usercard";
import { useNavigate } from "react-router";
import axios from "axios";
import { Base_url } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addusers } from "../Utils/userSlice";

const Editprofile = ({ user }) => {
  const [firstname, setfirstname] = useState(user.firstname);
  const [lastname, setlastname] = useState(user.lastname);
  const [age, setage] = useState(user.age);
  const [gender, setgender] = useState(user.gender);
  const [skills, setskills] = useState(user.skills);
  const [about, setabout] = useState(user.about);
  const [photourl, setphotourl] = useState(user.photourl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, seterror] = useState();
  const [showtoast, setshowtoast] = useState(false);

  const saveprofile = async () => {
    seterror("");
    try {
      const res = await axios.patch(
        Base_url + "/profile/edit",
        { firstname, lastname, gender, about, age, skills, photourl },
        { withCredentials: true }
      );
      dispatch(addusers(res?.data?.data));
      setshowtoast(true);
      setTimeout(() => {
        setshowtoast(false);
      }, 3000);
    } catch (err) {
      // console.log(err);
      seterror(err.response.data);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-5 justify-center items-start">
      <div className="hero bg-base-200 rounded-xl shadow-md p-5 w-[450px] h-full lg:h-[740px] mb-5">
        <div className="hero-content flex-col w-[400px]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Edit Profile</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Firstname</label>
                <input
                  type="text"
                  className="input"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                />
                <label className="label">Lastname</label>

                <input
                  type="text"
                  className="input"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />

                <label className="label">Age</label>

                <input
                  type="text"
                  className="input"
                  value={age}
                  onChange={(e) => setage(e.target.value)}
                />

                <label className="label">Gender</label>

                <input
                  type="text"
                  className="input"
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                />
                <label className="label">About</label>

                <input
                  type="text"
                  className="input"
                  value={about}
                  onChange={(e) => setabout(e.target.value)}
                />
                <label className="label">Skills</label>

                <input
                  type="text"
                  className="input"
                  value={skills}
                  onChange={(e) => setskills(e.target.value)}
                />

                <label className="label">Photourl</label>

                <input
                  type="text"
                  className="input"
                  value={photourl}
                  onChange={(e) => setphotourl(e.target.value)}
                />
                <p className="text-red-400">{error}</p>
                <button
                  className="btn btn-neutral text-white bg-red-500 mt-4 hover:bg-amber-50 hover:text-black"
                  onClick={saveprofile}
                >
                  Save Profile
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-full lg:h-[650px]">
        <Usercard
          user={{ firstname, lastname, gender, about, age, skills, photourl }}
        ></Usercard>
      </div>
      {showtoast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success mt-7 bg-gray-200">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editprofile;
