import React from "react";

import Navbar from "../../../components/navbar/Navbar";

import Logins from "../../../components/Pages/Contactus/login";
import NewFooter from "../../footer/NewFooter";

const Contactus = () => {
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

export default Contactus;
