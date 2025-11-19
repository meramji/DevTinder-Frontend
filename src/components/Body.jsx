import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import { Base_url } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addusers } from "../Utils/userSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const userdata = useSelector((store) => store.user);

  const fetchuser = async () => {
    if (userdata) return;
    try {
      const res = await axios.get(Base_url + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addusers(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      } else {
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchuser();
  }, []);

  if (loading === true) {
    return <div></div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Body;
