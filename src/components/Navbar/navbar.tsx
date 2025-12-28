import { useEffect, useState } from "react";
import logo from "../images/logo.png";
import "./navbar.css";
const navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className={`navbar navbar-expand  px-5 ${sticky ? "dark-nav" : " "}`}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="container-fluid">
          <img
            src={logo}
            alt="Virtual Haven Logo"
            width="200px"
            className="d-inline-block align-text-top"
          />{" "}
        </div>
        <div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active style"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active style"
                  aria-current="page"
                  href="#"
                >
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active style"
                  aria-current="page"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active About"
                  aria-current="page"
                  href="#"
                >
                  About Us
                </a>
              </li>

              <li className="nav-item ">
                <button className="btn btn-light ">Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
