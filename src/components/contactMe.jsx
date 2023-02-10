import React from "react";

export default function ContactMe() {
  return (
    <div className="contact-me" data-scroll-section>
      <div className="header-text">
        <h1>CONTACT ME</h1>
      </div>
      <div className="d-flex d-flex-center d-flex-column contact-me-body">
        <form>
          <div className="row">
            <div className="col-md-3 mb-4">
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="First name"
                required
              />
            </div>
            <div className="col-md-3 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                required
              />
            </div>
            <div className="form-group col-md-6 mb-4">
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group mb-4">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>
          <div className="text-align-center">
            <button className="btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
