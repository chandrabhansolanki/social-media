import React from "react";
import Login from "./Components/Login/Login";
import Singhup from "./Components/Singhup/Singhup";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Forget from "./Components/forgetpassword/Forget";
import Resetpass from "./Components/reset/Resetpass";
function App() {
  return (
    <div className="d-flex bg-light">
      <Routes>
        <Route exact path="/Singhup" element={<Singhup />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/forget" element={<Forget />} />
        <Route exact path="/Resetpass" element={<Resetpass />} />
      </Routes>

      {/* </BrowserRouter> */}
      {/* <Nav />
      <SideBar />
      <Next />
      <Createpost /> */}
    </div>
  );
}
export default App;
