import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            className="card-img-top"
            src={props.imgsrc}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.url} className="btn btn-primary" target="_blank">
              Checkout my projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
