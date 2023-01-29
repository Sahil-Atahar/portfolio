import React from "react";
import Common from "./Common";
import aboutImage from "../src/images/about.png";

export default function About() {
  return (
    <>
      <Common
        heading={<h1>Welcome to about page</h1>}
        imgsrc={aboutImage}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
}
