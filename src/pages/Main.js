import React from "react";
import { NavBar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

const Main = () => {
  return (
    <>
      <NavBar />
      <div className="app__wrap">
        <main>
          <h1>Main page</h1>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Main;
