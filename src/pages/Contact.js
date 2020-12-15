import React, { useState } from "react";
import computerRaccoon from "./computerRaccoon.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  

//  const canBeSubmitted = () => {
//   if (name.length > 0 && email.length > 0 && comment.length > 0){
//     return setDisabled(false)
//   }
//  }

  const handleSubmit = () => {
    alert("Your Trash Talk has been submitted!");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <h2 className="contact-subtitle">
        "Our Products are Trash; Your Concerns are Not
      </h2>

      <div className="computer-raccoon">
        <img src={computerRaccoon} alt="computer raccoon" />
      </div>

      <form className="contact-form">
        <div className="row">
          <label htmlFor="name" className="col">
            {" "}
            Name{" "}
          </label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col input-border"
          />
        </div>
        <div className="row">
          <label htmlFor="email" className="col">
            Email
          </label>
          <input
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="col input-border"
          />
        </div>
        <div className="row">
          <label htmlFor="message" className="col">
            Message
          </label>
          <input
            type="textarea"
            placeholder="Time for Trash Talk"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="contact-message col input-border"
          />
        </div>
        <div className="row">
            <Link
              to="/products"
              className="btn-primary col"
              type="submit"
              onClick={() => handleSubmit()}
            >
              Submit
            </Link>
        </div>
      </form>
    </div>
  );
};

export default Contact;
