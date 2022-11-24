import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Singhup() {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState([]);
  const [lastName, setlastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [username, setuserName] = useState([]);
  const [password, setPassword] = useState([]);
  //   console.log(name, lastname, email, username, password);
  const submitetext = async () => {
    await fetch("https://zn4fin-4000.preview.csb.app/api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        username,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success === true) {
          toast.success("Regsistered Successfully !", {
            position: toast.POSITION.TOP_CENTER,
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.error("Invalid Data Please Try Again!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="card-body p-md-5 mx-md-4 ">
              <div className="text-center">
                <h1 className="mt-1 mb-2 pb-1 text-primary">EP Soft</h1>
              </div>

              <form className="border bg-white rounded-3 form">
                <p className="text-center mt-3 fw-bold fs-4">
                  {" "}
                  Create a new account
                </p>
                <div className="mb-3 mx-3">
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-control py-3"
                    required={true}
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </div>
                <div className="mb-3 mx-3">
                  <input
                    type="email"
                    placeholder="Last name"
                    className="form-control py-3"
                    required={true}
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </div>
                <div className="mb-3 mx-3">
                  <input
                    type="text"
                    placeholder=" phone number or Email address "
                    className="form-control py-3"
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 mx-3">
                  <input
                    type="text"
                    placeholder="username"
                    className="form-control py-3"
                    required={true}
                    value={username}
                    onChange={(e) => setuserName(e.target.value)}
                  />
                </div>
                <div className="mb-3 mx-3">
                  <input
                    type="text"
                    placeholder="New password"
                    className="form-control py-3"
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2 mx-3 my-3">
                  <button
                    onClick={submitetext}
                    className="btn btn-lg btn-info mt-2 py-2 login-btn w-25 container"
                    type="button"
                  >
                    Sing Up
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-center pb-4 mb-2 link-div">
                  <a
                    to="/Login"
                    className="mb-0 me-2 text-decoration-none fs-5"
                  >
                    Already have an account?
                  </a>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                      <div className="card-body p-md-5 mx-md-4 "> </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singhup;

// async function submiteHandle(e) {
//   e.preventDefault();
//   setTask([...task, text]);
//   setText("");
//   await fetch("https://rest-social-media.herokuapp.com/api/post/create", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       Authorization: localStorage.getItem(`token`),
//     },
//     body: JSON.stringify({
//       text,
//     }),
//   })
//     .then((res) => res.json)
//     .then((result) => console.log(result));
// }
