import React, { useEffect } from "react";
import Header from "../layout/HomeHeader/header";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let Navigate = useNavigate();
  let logut = async () => {
    let res = await fetch("http://localhost:8000/logout", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    if (res.status !== 200) {
      console.log("Issue");
    } else {
      Navigate("/login", { replace: true });
    }
  };
  useEffect(() => {
    logut();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Logout;
