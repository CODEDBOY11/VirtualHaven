import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="containerfluid">
        <div className="position">
          <div className="text-center">
            <h1 className="welcome">Welcome to Virtual Haven</h1>
            <p className="tagline">Your Gateway to Digital Skills</p>
          </div>
        </div>
      </div>
      <button className="btn btn-light explore-btn">
        Explore <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
};

export default Hero;
