import "./services.css";
import virtual from "../images/virtual.jpg";
import creative from "../images/creative.webp";
import marketing from "../images/marketing.jpg";
import masters from "../images/masters.webp";
import frontend from "../images/webdev.jpg";
import social from "../images/socialman.jpg";
const services = () => {
  return (
    <div id="courses" className="cards">
      {" "}
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={virtual} className="card-img-top img-custom" alt="..." />
        <div className="card-body">
          <h4 className="card-title">
            VIRTUAL ASSISTANT (For admin/executive assistant)
          </h4>
          <p className="card-text">
            Learn essential administrative, project management, and client
            acquisition skills to start your career as a professional virtual
            assistant.
          </p>
          <a href="#" className="btn course-details">
            View Details
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={social} className="card-img-top img-custom" alt="..." />
        <div className="card-body">
          <h4 className="card-title">Social Media Assistant</h4>
          <p className="card-text">
            Master social media management, content creation, engagement, and
            analytics to support brands and businesses online.
          </p>
          <a href="#" className="btn course-details">
            View Details
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={creative} className="card-img-top img-custom" alt="..." />
        <div className="card-body">
          <h4 className="card-title">Creative Virtual Assistant</h4>
          <p className="card-text">
            Build in-demand Canva and graphic design skills to create branded
            visuals and creative assets for clients.
          </p>
          <a href="#" className="btn course-details">
            View Details
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={frontend} className="card-img-top img-custom" alt="..." />
        <div className="card-body">
          <h4 className="card-title">Technical Virtual Assistant</h4>
          <p className="card-text">
            Learn website management, basic web design, SEO fundamentals, and
            analytics to offer high-value technical VA services.
          </p>
          <a href="#" className="btn course-details">
            View Details
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={marketing} className="card-img-top img-custom" alt="..." />
        <div className="card-body">
          <h4 className="card-title">Digital Marketing Assistant</h4>
          <p className="card-text">
            Develop practical digital marketing skills including SEO, email
            marketing, content marketing, and paid ads to drive results for
            clients.
          </p>
          <a href="#" className="btn course-details">
            View Details
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={masters} className="card-img-top img-custom" alt="..." />
        <div className="card-body">
          <h4 className="card-title">
            {" "}
            Virtual Assistant Master Class (All-in-One VA Training)
          </h4>
          <p className="card-text">
            An all-in-one virtual assistant masterclass combining admin,
            creative, technical, and marketing skills to help you build a
            profitable VA business.
          </p>
          <a href="#" className="btn course-details">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};
export default services;
