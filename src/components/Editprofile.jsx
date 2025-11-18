import { useState } from "react";
import Usercard from "./Usercard";

const Editprofile = ({ user }) => {
  const [firstname, setfirstname] = useState(user.firstname);
  const [lastname, setlastname] = useState(user.lastname);
  const [age, setage] = useState(user.age);
  const [gender, setgender] = useState(user.gender);
  const [skills, setskills] = useState(user.skills);
  const [about, setabout] = useState(user.about);
  const [photourl, setphotourl] = useState(user.photourl);
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-5 justify-center items-start">
      <div className="hero bg-base-200 rounded-xl shadow-md p-5 w-[400px] h-full lg:h-[700px] mb-5">
        <div className="hero-content flex-col w-[345px]">
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
                <button
                  className="btn btn-neutral text-white bg-red-500 mt-4 hover:bg-amber-50 hover:text-black"
                  //   onClick={handlelogin}
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
    </div>
  );
};

export default Editprofile;
