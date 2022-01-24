import React from 'react';
import nutmLogo from "../assets/nutm-logo.png";
import nutmImg from "../assets/nutm-img.png";
import location from "../assets/icons/location-icon.png";
import clock from "../assets/icons/time-icon.png";
import calendar from "../assets/icons/calendar-icon.png";
import line from "../assets/icons/green-line.png";


const Nutm = () => {
  return (
    <div className="nutm">
      <nav>
        <img src={nutmLogo} alt="" />
        <img src={line} alt="" />
      </nav>
      <main className="app__wrap">
        <img src={nutmImg} alt="" />
        <div className="nutm__img-aside">
          <h2>Email Etiquette</h2>
          <p>Academic and Professional emailing</p>
        </div>
      </main>
      <aside className="nutm__aside">
        <span>
          <img src={location} alt="" />
          <img src={line} alt="" />
          <p>Auditorium</p>
        </span>
        <span>
          <img src={clock} alt="" />
          <img src={line} alt="" />
          <p>4pm - 6pm</p>
        </span>
        <span>
          <img src={calendar} alt="" />
          <img src={line} alt="" />
          <p>24/1/2022</p>
        </span>
      </aside>
      <footer>{/* footer */}</footer>
    </div>
  );
};

export default Nutm;
