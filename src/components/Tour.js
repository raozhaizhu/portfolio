import React, { useState } from "react";
import Modal from "./Modal"; // 引入Modal组件

const Tour = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 控制模态框显示与隐藏

  // 打开模态框
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 关闭模态框
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="tour" className="bg-1">
      <div className="container">
        <h3 className="text-center">TOUR DATES</h3>
        <p className="text-center">
          We'll play you some music. Remember to book your tickets!
        </p>
        <br />
        <ul className="list-group bg-2">
          <li className="list-group-item">
            September <span className="label label-danger">Sold Out!</span>
          </li>
          <li className="list-group-item">
            October <span className="label label-danger">Sold Out!</span>
          </li>
          <li className="list-group-item">
            November <span className="badge">3</span>
          </li>
        </ul>
        <div className="row text-center">
          {[
            {
              city: "Paris",
              date: "Fri. 27 November 2015",
              img: "/images/paris.jpg",
            },
            {
              city: "New York",
              date: "Sat. 28 November 2015",
              img: "/images/newyork.jpg",
            },
            {
              city: "San Francisco",
              date: "Sun. 29 November 2015",
              img: "/images/sanfran.jpg",
            },
          ].map((tour, index) => (
            <div key={index} className="col-sm-4">
              <div className="thumbnail">
                <img src={tour.img} alt={tour.city} />
                <p>
                  <strong>{tour.city}</strong>
                </p>
                <p>{tour.date}</p>
                <button
                  className="btn btn-default"
                  onClick={openModal} // 点击时打开模态框
                >
                  Buy Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal 组件，控制其显示与隐藏 */}
      <Modal show={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Tour;
