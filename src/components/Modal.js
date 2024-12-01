import React from "react";

const Modal = ({ show, onClose }) => {
  if (!show) return null; // 如果 show 为 false，则不渲染模态框

  return (
    <div className="modal fade in" style={{ display: "block" }} role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onClose}>
              &times;
            </button>
            <h4>
              <span className="glyphicon glyphicon-lock"></span> Tickets
            </h4>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="psw">
                  <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                  Tickets, $23 per person
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="psw"
                  placeholder="How many?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="usrname">
                  <span className="glyphicon glyphicon-user"></span> Send to
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="usrname"
                  placeholder="Enter email"
                />
              </div>
              <button type="submit" className="btn btn-block">
                Pay <span className="glyphicon glyphicon-ok"></span>
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger btn-default pull-left"
              onClick={onClose}>
              <span className="glyphicon glyphicon-remove"></span> Cancel
            </button>
            <p>
              Need <a href="#">help?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
