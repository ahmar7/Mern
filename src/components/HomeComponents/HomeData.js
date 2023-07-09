import React, { useState, useEffect } from "react";
import "./HomeData.css";
const HomeData = () => {
  const [Data, setData] = useState();
  const [user, setUser] = useState();
  let getData = async () => {
    try {
      let res = await fetch("http://localhost:8000/getData", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      let data = await res.json();

      if (res.status === 200) {
        setData(data.name);
        setUser(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="home">
      <h3>Welcome </h3>
      <br />
      {user ? <h1>{Data}</h1> : <h1>We are developers</h1>}
    </div>
  );
};

export default HomeData;
