import { useState } from "react";
import Usercard from "./Usercard";
import axios from "axios";
import { Base_url } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addusers } from "../Utils/userSlice";

const Editprofile = ({ user }) => {
  const [firstname, setfirstname] = useState(user.firstname);
  const [lastname, setlastname] = useState(user.lastname);
  const [age, setage] = useState(user.age || "");
  const [gender, setgender] = useState(user.gender || "");
  const [skills, setskills] = useState(user.skills || "");
  const [about, setabout] = useState(user.about);
  const [photourl, setphotourl] = useState(user.photourl);
  const dispatch = useDispatch();
  const [error, seterror] = useState();
  const [showtoast, setshowtoast] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);

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
      setTimeout(() => setshowtoast(false), 3000);
    } catch (err) {
      seterror(err.response.data);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-10 p-5 justify-center items-start w-full">
      <div className="bg-linear-to-r from-[#1e2a38] to-[#1b2533] rounded-2xl border border-[#2f3c4d] p-6 w-full max-w-[450px] mb-5 shadow-lg">
        <div className="hero-content flex-col w-full">
          <h1 className="text-4xl font-bold text-center mb-6 tracking-wide text-white">
            Edit Profile
          </h1>

          <div className="card bg-[#7182c41f] w-full shadow-md border border-[#2a2c31]">
            <div className="card-body">
              <fieldset className="space-y-4">
                <div>
                  <label className="text-xs text-[#7dd3fc] uppercase tracking-wide mb-1 block">
                    Firstname
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full bg-[#111827] border-[#2f3c4d]  text-white"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-xs text-[#7dd3fc] uppercase tracking-wide mb-1 block">
                    Lastname
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full bg-[#111827] border-[#2f3c4d] text-white"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div>

                <div className="flex gap-4 w-full">
                  <div className="flex-1 min-w-[120px]">
                    <label className="text-xs text-[#7dd3fc]  uppercase tracking-wide mb-1 block">
                      Age
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full bg-[#111827] border-[#2f3c4d] text-white"
                      value={age}
                      onChange={(e) => setage(e.target.value)}
                    />
                  </div>

                  <div className="flex-1 min-w-[120px] relative">
                    <label className="text-xs text-[#7dd3fc] uppercase tracking-wide mb-1 block">
                      Gender
                    </label>
                    <button
                      type="button"
                      className="input input-bordered w-full bg-[#111827] border-[#2f3c4d] text-left text-white flex items-center justify-between"
                      onClick={() => setShowGenderDropdown((prev) => !prev)}
                    >
                      <span>{gender || "Select gender"}</span>
                      <span className="text-xs opacity-70">▼</span>
                    </button>

                    {showGenderDropdown && (
                      <ul className="absolute z-50 w-full bg-[#2a2c31] border border-[#383a40] rounded-lg shadow-md mt-1">
                        {["Male", "Female", "Other"].map((g) => (
                          <li
                            key={g}
                            className="px-4 py-2 hover:bg-[#34363b] text-gray-200 cursor-pointer"
                            onClick={() => {
                              setgender(g);
                              setShowGenderDropdown(false);
                            }}
                          >
                            {g}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#7dd3fc] uppercase tracking-wide mb-1 block">
                    About
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full h-[70px] bg-[#111827] border-[#2f3c4d] text-white resize-none"
                    value={about}
                    onChange={(e) => setabout(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-xs text-[#7dd3fc]   uppercase tracking-wide mb-1 block">
                    Skills
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full bg-[#111827] border-[#2f3c4d] text-white"
                    value={skills}
                    onChange={(e) => setskills(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-xs text-[#7dd3fc] uppercase tracking-wide mb-1 block">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full bg-[#111827] border-[#2f3c4d] text-white"
                    value={photourl}
                    onChange={(e) => setphotourl(e.target.value)}
                  />
                </div>

                <p className="text-red-400 text-sm">{error}</p>
                <button
                  onClick={saveprofile}
                  className="w-full py-2.5 rounded-md font-medium tracking-wide bg-linear-to-r from-[#3b82f6] to-[#2563eb]  text-white border border-[#1d2430] transition-transform duration-300  hover:scale-[1.03] active:scale-[0.96]"
                >
                  Save Profile
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[400px]">
        <Usercard
          user={{ firstname, lastname, gender, about, age, skills, photourl }}
          showButtons={false}
        />
      </div>

      {showtoast && (
        <div className="toast toast-top toast-center">
          <div className="alert mt-7 bg-gray-600 text-white shadow-md">
            <span>Profile Saved Successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editprofile;
