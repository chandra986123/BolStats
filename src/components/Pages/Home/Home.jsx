import React from "react";
import "./Home.css";
import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
  NewFooter,
} from "../../../components";

const Home = () => {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      {/* <Download /> */}
      {/* <Subscribe /> */}
      {/* <Faq /> */}
      <NewFooter />
    </main>
  );
};

export default Home;
