import icon_star from "../assets/images/icon-star.svg";

const Request = ({ value, setValue, setRated }) => {
  const handleSubmit = () => {
    if (!value) return;
    setRated(true);
  };

  return (
    <div className="card">
      <div className="container-card">
        <div className="icon-star">
          <img src={icon_star} alt="icon-star" />
        </div>
        <h2 className="question">How did we do?</h2>
        <div className="comment">
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="buttons">
          <div className="buttons-circle">
            <button className="btn-circle" onClick={() => setValue("1")}>
              1
            </button>
            <button className="btn-circle" onClick={() => setValue("2")}>
              2
            </button>
            <button className="btn-circle" onClick={() => setValue("3")}>
              3
            </button>
            <button className="btn-circle" onClick={() => setValue("4")}>
              4
            </button>
            <button className="btn-circle" onClick={() => setValue("5")}>
              5
            </button>
          </div>
          <button className="btn-submit" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Request;
