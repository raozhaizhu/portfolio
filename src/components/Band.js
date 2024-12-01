// src/components/Band.js
import React from "react";

const Band = () => {
  return (
    <div id="band" className="container text-center">
      <h3>THE BAND</h3>
      <p>
        <em>We love music!</em>
      </p>
      <p>
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua...
      </p>
      <div className="row">
        {[0, 1, 2].map((index) => (
          <div key={index} className="col-sm-4">
            <p>
              <strong>Member</strong>
            </p>
            <a href={`#demo${index}`} data-toggle="collapse">
              <img
                src="/images/member.jpg"
                width="250"
                height="250"
                className="img-circle"
                alt="Random Name"
              />
            </a>
            <div id={`demo${index}`} className="collapse">
              <p>Guitarist and Lead Vocalist</p>
              <p>Loves long walks on the beach</p>
              <p>Member since 1988</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Band;
