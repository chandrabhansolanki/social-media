import React, { useState } from "react";
import "./Reset.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Resetpass() {
  const [token, setTokens] = useState(
    JSON.stringify(localStorage.getItem("token")).replaceAll('"', "")
  );

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleReset = (e) => {
    e.preventDefault();
    fetch("https://zn4fin-4000.preview.csb.app/api/auth/verify-forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        token,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.success === true) {
          toast.success(res.message || " ", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate("/");
          });
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      });

    setTimeout(() => {
      setPassword(" ");
    }, 3000);
  };

  return (
    <>
      <div className="col-md-3 container mt-5">
        <form className="border bg-white rounded-3 form">
          <h5 className="text-center my-2">Reset Your Password</h5>
          <div className="hello">
            <div className="mt-3">
              <p className="my-1">Old Password</p>
              <input onChange={(e) => setTokens(e.target.value)} />
            </div>
            <div className="mt-3">
              <p className="my-1">New Password</p>
              <input onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleReset} className="btn btn-primary w-25 my-3">
              submit
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </>
  );
}

export default Resetpass;
