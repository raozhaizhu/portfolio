// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">
            Feel free to reach out to us using the form below.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Your Message"
                required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
