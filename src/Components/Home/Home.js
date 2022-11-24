// import React from "react";
// import "./Home.css";
// import { SiMessenger } from "react-icons/si";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { MdOutlineNotificationsActive } from "react-icons/md";

// function Home() {
//   return (
//     <Navbar className="w-100 bg-white">
//       <Container className="mx-3">
//         <Navbar.Brand href="#home">Facebook</Navbar.Brand>

//         <Nav className="www">
//           <input className="justify-content-center mx-5  hello " />
//           <div className=" msg mx-5">
//             <SiMessenger className="ppp mx-2 my-2" />
//           </div>
//           <div className=" msg  ">
//             <MdOutlineNotificationsActive className="yyy" />
//           </div>
//           {/* <div className="bg-danger notif">
//             <MdOutlineNotificationsActive className="yyy mt-0" />
//           </div> */}
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default Home;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Createpost from "../createpost/Createpost";
function NavBar() {
  const navigate = useNavigate();
  const [token, setTokens] = useState(
    JSON.stringify(localStorage.getItem("token")).replaceAll('"', "")
  );
  const handleLogout = (e) => {
    e.preventDefault();
    fetch("https://zn4fin-4000.preview.csb.app/api/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.success === true) {
          toast.success("hello !", {
            position: toast.POSITION.TOP_CENTER,
          });

          navigate("/");
        } else {
          toast.error("ivaild data plz try again", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };
  return (
    <>
      <div className="">
        <div className="mmm">
          <nav className="navbar">
            <div className="nav-container">
              <p exact to="/Home" className="nav-logo">
                Facebook
                <i className="fas fa-code"></i>
              </p>
              <input className="rehan" />

              <ul className="d-flex">
                <button onClick={handleLogout} className="btn btn-primary">
                  Logout
                </button>
                <button className="btn btn-info mx-3">Signin</button>
              </ul>
              <div className="nav-icon">
                <i></i>
              </div>
            </div>
          </nav>
        </div>
        <Createpost />
      </div>
    </>
  );
}

export default NavBar;
