import React from "react";
import Card from "./components/Card";
import appdevimg from "../src/images/app_development.png";
import anddevimg from "../src/images/android_development.jpg";
import webdevimg from "../src/images/web_development.jpg";

export default function Service() {
  const services = [
    {
      imgsrc: appdevimg,
      title: "App Development",
      text: "I can create App for you",
      url: "https://github.com/Sahil-Atahar?tab=repositories&q=&type=&language=javascript&sort=",
    },
    {
      imgsrc: webdevimg,
      title: "Web Development",
      text: "I can create website for you",
      url: "https://github.com/Sahil-Atahar?tab=repositories&q=&type=&language=dart&sort=",
    },
    {
      imgsrc: anddevimg,
      title: "Android Development",
      text: "I can create android App for you",
      url: "https://github.com/Sahil-Atahar?tab=repositories&q=&type=&language=dart&sort=",
    },
  ];

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {services.map((service) => (
                <Card
                  title={service.title}
                  text={service.text}
                  imgsrc={service.imgsrc}
                  key={service.title}
                  url={service.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
