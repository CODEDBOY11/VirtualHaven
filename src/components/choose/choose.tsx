import chooseImage from "../images/choose.png";
import "./choose.css";

const choose = () => {
  return (
    <div className="choose-div">
      <a href="#">
        <button className="floating-button">
          WE OFFER FREE CONSULTATIONS FOR BUSINNESS ONWERS. <br /> BOOK NOW!
        </button>
      </a>
      <a href="#">
        <button className="backtothetop-button">
          <i className="bi bi-arrow-up"></i>
        </button>
      </a>

      <img className="img" src={chooseImage} />
    </div>
  );
};

export default choose;
