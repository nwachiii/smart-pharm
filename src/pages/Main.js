import React from "react";
import { NavBar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import "./main.css";

import imgOne from "../assets/image1.png";
import videoImg from "../assets/video.png";
import blogOne from "../assets/blog-img1.png";
import blogTwo from "../assets/blog-img2.png";
import blogThree from "../assets/blog-img3.png";
import PillArea from "../Components/PillArea";

const Main = () => {
  return (
    <>
      <NavBar />
      <div className="">
        <main>
          <PillArea />
          <section className="sectionOne">
            <div>
              <h2>SmartPharm</h2>
              <p>
                The one stop platform where you can find any medication in
                Nigeria
              </p>
              <button>Search</button>
            </div>
            <div>
              <img src={imgOne} alt="" />
            </div>
          </section>
          <section className="sectionTwo">
            <h4 className="text-white pt-5">How Smartpharm works</h4>
            <div>
              <img src={videoImg} alt="" />
              <p>
                Save money and time in searching for any medication, especially
                life saving essential medications in 3 easy steps
              </p>
            </div>
          </section>
          <section className="sectionThree">
            <h4>Blog</h4>
            <div className="sectionThree__grid">
              <div className="sectionThree__gridItem">
                <img src={blogOne} alt="" />
                <p>
                  The ABC of antihypertensives , drug-drug interactions and
                  food-drug interactions you should know!{" "}
                </p>
                <p>Read More</p>
              </div>
              <div className="sectionThree__gridItem">
                <img src={blogTwo} alt="" />
                <p>
                  Essential medications we all should have at home and how best
                  to store them.
                </p>
                <p>Read More</p>
              </div>
              <div className="sectionThree__gridItem">
                <img src={blogThree} alt="" />
                <p>
                  New antimicrobal discoveries that can wipe out super bugs and
                  prevent antibiotics resistance especially in immuno
                  compromised patients.
                </p>
                <p>Read More</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Main;
