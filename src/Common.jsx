import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Common.css";

export default function Common(props) {
  return (
    <>
      <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  {props.heading}
                  <h2 className="my-3">A Web Developer and App Developer making websites</h2>
                  <div className="mt-3 mx-lg-0 mx-auto mb-5">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-ld-2 header-img  d-flex align-items-center">
                  <img
                    src={props.imgsrc}
                    alt="Image"
                    className="img-fluid animated rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
