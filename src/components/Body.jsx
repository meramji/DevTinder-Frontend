import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import { Base_url } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addusers } from "../Utils/userSlice";
import { useEffect } from "react";
import axios from "axios";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchuser = async () => {
    try {
      const res = await axios.get(Base_url + "/profile/view", {
        withCredentials: true,
      });
      // console.log(res);

      dispatch(addusers(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      } else {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchuser();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Body;
