// src/components/Carousel.js
import React from "react";

const Carousel = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div id="myCarousel" className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="/images/ny.jpg" alt="New York" className="img-responsive" />
          <div className="carousel-caption">
            <h3>New York</h3>
            <p>The atmosphere in New York is great.</p>
          </div>
        </div>

        <div className="item">
          <img
            src="/images/chicago.jpg"
            alt="Chicago"
            className="img-responsive"
          />
          <div className="carousel-caption">
            <h3>Chicago</h3>
            <p>Thank you, Chicago - A night we won't forget.</p>
          </div>
        </div>

        <div className="item">
          <img
            src="/images/la.jpg"
            alt="Los Angeles"
            className="img-responsive"
          />
          <div className="carousel-caption">
            <h3>LA</h3>
            <p>
              Even though the traffic was a mess, we had the best time playing
              at Venice Beach!
            </p>
          </div>
        </div>
      </div>

      <a
        className="left carousel-control"
        href="#myCarousel"
        data-slide="prev"
        role="button">
        <span
          className="glyphicon glyphicon-chevron-left"
          aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control"
        href="#myCarousel"
        data-slide="next"
        role="button">
        <span
          className="glyphicon glyphicon-chevron-right"
          aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
