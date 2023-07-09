import React, { useState } from "react";
import SignUp from "../../assets/images/signup-image.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isloading, setisloading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  let postData = async (e) => {
    e.preventDefault();
    setisloading(true);

    let { name, email, phone, work, password, address } = user;
    let res = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        address,
      }),
    });

    let data = await res.json();
    console.log(data);
    if (res.status === 400 || !res) {
      setisloading(false);
      console.log("Inavlid Registration");
      alert("Inavlid Registration");
    } else if (res.status === 200) {
      console.log("Successful Registration");
      alert("Successful Registration");
      navigate("/login");
    }
  };
  // const postData = (e) => {
  //   e.preventDefault();
  //   console.log("clicked");
  //   // let res = fetch("http://localhost:8000/register", {
  //   //     method: "POST",
  //   //     headers: { "Content-Type": "application/json" },
  //   //     body: JSON.stringify({
  //   //       name,
  //   //       email,
  //   //       phone,
  //   //       work,
  //   //       password,
  //   //     }),
  //   //   });

  //   let { name, email, phone, work, password, cpassword } = user;
  //   fetch("http://localhost:8000/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       phone,
  //       work,
  //       password,
  //     }),
  //   })
  //     .then((response) => {
  //       console.log(response, "Done");
  //       // return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data, "No");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <div className="main">
      {/* Sign up form */}
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleInput}
                    value={user.name}
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    value={user.email}
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="text"
                    name="phone"
                    onChange={handleInput}
                    value={user.phone}
                    id="phone"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="text"
                    name="address"
                    onChange={handleInput}
                    value={user.address}
                    id="phone"
                    placeholder="Your Address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="text"
                    name="work"
                    onChange={handleInput}
                    value={user.work}
                    id="work"
                    placeholder="Your Work"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    value={user.password}
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock-outline" />
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    onChange={handleInput}
                    value={user.cpassword}
                    id="cpassword"
                    placeholder="Repeat your password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    onChange={handleInput}
                    id="agree-term"
                    className="agree-term"
                  />
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span>
                      <span />
                    </span>
                    I agree all statements in{" "}
                    <a href="https://google.com" className="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div className="form-group form-button">
                  <button
                    style={{ border: "none" }}
                    type="submit"
                    onClick={postData}
                    className="form-submit"
                  >
                    {isloading ? (
                      <div class="spinner-border" role="status"></div>
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={SignUp} alt="sing up " />
              </figure>
              <NavLink to="/login" className="signup-image-link">
                I am already member
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;
