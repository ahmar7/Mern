import React, { useState } from "react";
import SignIn from "../../assets/images/signin-image.jpg";
import { NavLink, useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [isloading, setisloading] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [isMatch, setisMatch] = useState(false);
  let Navigate = useNavigate();
  const [email, setEmail] = useState("AhmArJabbar@gmail.com");
  const [password, setPassword] = useState("1");
  let logIn = async (e) => {
    e.preventDefault();
    setisMatch(false);

    setisloading(true);
    setisSuccess(false);
    let res = await fetch("http://localhost:8000/login", {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    });
    let data = res.json();

    if (res.status === 400 || !data) {
      setisloading(false);
      console.log("Error Occured");
      setisMatch(true);
    } else if (res.status === 200) {
      setisMatch(false);
      setisSuccess(true);
      setisloading(false);
      console.log("Signin Successful");
      Navigate("/");
    }
  };
  return (
    <div className="main">
      {/* Sing in  Form */}
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={SignIn} alt="sing up " />
              </figure>
              <NavLink to="/register" className="signup-image-link">
                Create an account
              </NavLink>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  {isMatch && (
                    <div class="alert alert-danger" role="alert">
                      Invalid Credentials
                    </div>
                  )}
                  {isSuccess && (
                    <div class="alert alert-danger" role="alert">
                      Login Successful
                    </div>
                  )}

                  <label htmlFor="your_name">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="your_name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="your_pass"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="agree-term"
                  />
                  <label htmlFor="remember-me" className="label-agree-term">
                    <span>
                      <span />
                    </span>
                    Remember me
                  </label>
                </div>
                <div className="form-group form-button">
                  <button
                    type="submit"
                    id="signin"
                    onClick={logIn}
                    className="form-submit"
                  >
                    {" "}
                    {isloading ? (
                      <div class="spinner-border" role="status"></div>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                {/* <ul className="socials">
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-google" />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
