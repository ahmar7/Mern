import React, { useState, useEffect } from "react";
import user from "../../assets/images/img-01.png";
const Contacts = () => {
  const [Data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  let getData = async () => {
    try {
      let res = await fetch("http://localhost:8000/getData", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      let data = await res.json();

      if (res.status === 200) {
        setData({
          ...Data,
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }; 
  let getInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...Data, [name]: value });
  };
  let sendMessage = async (e) => {
    e.preventDefault();
    let { name, email, phone, message } = Data;
    try {
      let res = await fetch("http://localhost:8000/contact", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // If both key and values are same, we can use the value directly instead of using :, but here is not using
          name: name,
          email: email,
          phone: phone,
          message: message,
        }),
      });
      let data = await res.json();
      console.log(data);
      if (!data) {
        console.log("message not sent", data);
      } else if (res.status === 201) {
        alert("message sent", data);
        setData({ ...Data, message: "" });
      } else {
        alert("failred");
      }
    } catch (error) {
      console.log(error, "catch");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="contact1">
      <div className="container-contact1">
        <div className="contact1-pic js-tilt" data-tilt>
          <img src={user} alt="sacae" />
        </div>
        <form className="contact1-form validate-form" method="POST">
          <span className="contact1-form-title">Get in touch</span>
          <div
            className="wrap-input1 validate-input"
            data-validate="Name is required"
          >
            <input
              className="input1"
              type="text"
              name="name"
              value={Data.name}
              placeholder="Name"
              onChange={getInputs}
            />
            <span className="shadow-input1" />
          </div>
          <div
            className="wrap-input1 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input1"
              type="text"
              name="email"
              value={Data.email}
              placeholder="Email"
              onChange={getInputs}
            />
            <span className="shadow-input1" />
          </div>
          <div
            className="wrap-input1 validate-input"
            data-validate="Subject is required"
          >
            <input
              className="input1"
              type="text"
              name="phone"
              value={Data.phone}
              placeholder="Phone"
              onChange={getInputs}
            />
            <span className="shadow-input1" />
          </div>
          <div
            className="wrap-input1 validate-input"
            data-validate="Message is required"
          >
            <textarea
              className="input1"
              name="message"
              placeholder="Message"
              onChange={getInputs}
              value={Data.message}
            />
            <span className="shadow-input1" />
          </div>
          <div className="container-contact1-form-btn">
            <button
              type="submit "
              onClick={sendMessage}
              className="contact1-form-btn"
            >
            
              
              <span class="">
                Send Email
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
