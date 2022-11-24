import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     navigate("/ Login");
  //   }
  // }, []);

  // async function login() {
  //   // console.log("data", email, password);
  //   let item = { email, password };
  //   let result = await fetch(
  //     "https://rest-social-media.herokuapp.com/api/auth/signin",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(item),
  //     }
  //   );
  //   result = await result.json();
  //   localStorage.setItem("user-info", JSON.stringify(result));
  //   navigate("/");
  // }

  const login = async () => {
    await fetch("https://zn4fin-4000.preview.csb.app/api/auth/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res?.data[0]?.token);
        console.log(res?.data[0]?.token);
        if (res.success === true) {
          toast.success("Regsistered Successfully !", {
            position: toast.POSITION.TOP_CENTER,
          });
          setTimeout(() => {
            navigate("/home");
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
                <p className="text-center mt-3"> Login to EP Soft</p>
                <div className="mb-3 mx-3">
                  <input
                    type="text"
                    placeholder="Email address or phone number"
                    className="form-control py-3"
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                  />
                </div>
                <div className="mb-3 mx-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control py-3"
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                  />{" "}
                </div>
                <div className="d-grid gap-2 mx-3 my-3">
                  <button
                    className="btn btn-lg btn-primary py-2 login-btn"
                    type="button"
                    onClick={login}
                  >
                    Log In
                  </button>
                </div>
                <div className="d-flex align-items-center justify-content-center pb-4 mb-2 link-div">
                  <Link
                    exact
                    to="/Forget"
                    className="mb-0 me-2 text-decoration-none"
                  >
                    Forgotten account?
                  </Link>
                  <Link
                    exact
                    to="/Singhup"
                    className="mb-0 me-2 text-decoration-none"
                  >
                    Sign up for EP Soft
                  </Link>
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

export default Login;

//https://rest-social-media.herokuapp.com/api/auth/signin
