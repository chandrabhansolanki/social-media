import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Resetpass from "../reset/Resetpass";

function Forget() {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const handleclick = async () => {
    await fetch("https://zn4fin-4000.preview.csb.app/api/auth/forgot-pass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        email,
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
            navigate("/Resetpass");
          }, 2000);
        } else {
          toast.error("Invalid Data Please Try Again!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };
  return (
    <div className="container mt-5">
      {/* <div class="card" style="width: 18rem;"> */}

      <div class="card w-50 container">
        <div class="card-body">
          <h5 class="card-title">Find Your Account</h5>
          <p class="card-text">
            Please enter your email address or mobile number to search for your
            account.
          </p>
          <input
            className="p-2 w-50"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <br />

          <button class="btn btn-info">cancel</button>
          <button
            onClick={handleclick}
            type="text"
            className="btn btn-primary mx-2"
          >
            submite
          </button>

          <ToastContainer />
        </div>
      </div>
      {/* <Reset /> */}
    </div>
  );
}

export default Forget;
