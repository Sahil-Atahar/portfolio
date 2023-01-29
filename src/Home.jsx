import React from "react";
import Common from "./Common";
import developerImage from "../src/images/developer_image.png";

export default function Home() {
  return (
    <>
      <Common
        heading={
          <h1>
            Hi, I'm <strong className="brand-name">Sahil Atahar</strong>
          </h1>
        }
        imgsrc={developerImage}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
}
