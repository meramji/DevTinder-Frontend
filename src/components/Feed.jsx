import axios from "axios";
import { Base_url } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addfeed } from "../Utils/Feedslice";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Usercard from "./Usercard";
import ShimmerCard from "./Shimmer";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);

  const getfeed = async () => {
    if (feed && feed.length > 0) {
      setloading(false);
      return;
    }

    try {
      const res = await axios.get(Base_url + "/feed", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addfeed(res?.data));
      setloading(false);
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };
  useEffect(() => {
    getfeed();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center my-16">
        <ShimmerCard></ShimmerCard>
      </div>
    );
  }

  return (
    feed?.length > 0 && (
      <div className="flex justify-center my-16">
        <Usercard user={feed[2]}></Usercard>
      </div>
    )
  );
};

export default Feed;
