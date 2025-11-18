const Usercard = ({ user }) => {
  console.log(user);
  const { photourl, age, firstname, lastname, about, gender, skills } = user;
  return (
    <div className="card bg-base-300 w-[450px] shadow-sm h-[699px]">
      <figure>
        <img src={photourl} alt="avtar" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">
          {firstname + "  " + lastname}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        {age && <p className="text-bold">{"Age" + "-:" + age}</p>}
        <p>{"Gender" + "-" + gender}</p>
        <p>{"Skills-"+skills}</p>
        <p>{about}</p>
        <div className="card-actions space-x-11 justify-center">
          <button className="badge badge-outline bg-blue-500 text-xl m-4">
            Ignore
          </button>
          <button className="badge badge-outline bg-pink-700 text-xl m-4">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
