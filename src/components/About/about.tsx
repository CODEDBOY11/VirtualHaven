import about from "../images/about.png";
import "./about.css";
const About = () => {
  return (
    <div className="div">
      <div>
        <img className="about-left" src={about} alt="About Virtual Haven" />
      </div>
      <div className="about-right">
        <h2 style={{ color: "teal" }}>About Us</h2>
        <p className="para" style={{ color: "black" }}>
          <b>Virtual Haven</b> was founded with one belief:
          <b>digital skills can change lives</b> and create opportunities for
          everyone, no matter where they are.
          <br />
          <br /> In just <b>2 years</b>, we have trained over
          <b>40 aspiring VAs/freelancers</b> and supported business owners
          across Nigeria, the UK, and the USA, helping them achieve efficiency,
          visibility, and balance.
          <br />
          <br /> Our approach is
          <b> people-first!</b>
          <br />
          <br /> We provide <b>affordable, accessible training</b>
          {"      "}
          for aspiring VAs/freelancers and <b>
            trusted, professional services
          </b>{" "}
          for growing businesses, while aligning our work with{" "}
          <b>sustainable values that make a long-term difference.</b>
        </p>
      </div>
    </div>
  );
};

export default About;
