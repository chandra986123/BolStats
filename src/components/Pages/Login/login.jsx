import React from "react";
import "./login.css";

import Navbar from "../../../components/navbar/Navbar";

import Logins from "../../../components/Login/login";
import NewFooter from "../../footer/NewFooter";

const Login = () => {
  return (
    <main>
      <header className="header-bgs">
        <Navbar />
      </header>

      <Logins />

      <NewFooter />
    </main>
  );
};

export default Login;
