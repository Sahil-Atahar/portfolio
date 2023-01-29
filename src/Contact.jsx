import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    fullname: "",
    mobno: "",
    email: "",
    message: "",
  });

  function onSubmit() {
    alert(
      `Hello, I am ${data.fullname}. My mobile no is ${data.mobno} and email address is ${data.email}.${data.message}`
    );
  }

  function onChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={onSubmit}>
                <div className="form-group mb-1">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="name"
                    name="fullname"
                    value={data.fullname}
                    onChange={onChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group mb-1">
                  <label>Mobile No</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="mobno"
                    name="mobno"
                    value={data.mobno}
                    onChange={onChange}
                    placeholder="Enter your mobile no"
                  />
                </div>
                <div className="form-group mb-1">
                  <label>Email </label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={onChange}
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    style={{ resize: "none" }}
                    className="form-control my-1"
                    id="mesaage"
                    rows="3"
                    name="message"
                    value={data.message}
                    onChange={onChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="btn btn-outline-primary mt-3"
                  >
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
