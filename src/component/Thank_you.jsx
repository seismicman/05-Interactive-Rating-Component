import React from "react";
import icon_illustration from "../assets/images/illustration-thank-you.svg";

const Thank_you = ({ value }) => {
  return (
    <div className="card">
      <div className="container-card-thx">
        <div className="illustration">
          <img src={icon_illustration} alt="icon-illustration" />
        </div>
        <div className="final-score">
          <p> You selected {value} out of 5</p>
        </div>
        <h2 className="thank-you">Thank You!</h2>
        <div className="comment-thx">
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thank_you;
