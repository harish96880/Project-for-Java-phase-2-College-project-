import React from "react";
import devImage from "../assets/Developer_Image2.png";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="row my-3">
        <div className="col-lg-6 col-md-6 col-12">
          <img src={devImage} className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-6 col-12 order-1 my-5">
          <h1 className="display-4 py-lg-2 py-3 my-2">About Us</h1>
          <p className="h4">
            Hello there! We are the passionate web developers currently pursuing
            B.Tech in IT at Hindusthan College of Engineering and Technology.
            With a handful of experience in Node.js, front-end development, and
            React, We're here to bring your website ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
}
