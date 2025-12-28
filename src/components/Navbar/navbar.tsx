import { useEffect, useState } from "react";
import logo from "../images/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const stored = localStorage.getItem("theme") as "light" | "dark" | null;
      if (stored) return stored;
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    // set initial state in case page loads scrolled
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // apply theme and persist
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  // Listen for system theme changes only if user hasn't set a preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mq.addEventListener
      ? mq.addEventListener("change", handler)
      : mq.addListener(handler);
    return () =>
      mq.removeEventListener
        ? mq.removeEventListener("change", handler)
        : mq.removeListener(handler);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

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
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
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
                  href="#/services/courses"
                >
                  Courses
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active style"
                  aria-current="page"
                  href=""
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

              <li className="nav-item">
                <button className="btn btn-light">Contact</button>
              </li>

              <li className="nav-item">
                <div className="theme-toggle" title="Toggle theme">
                  <label className="switch" aria-hidden="false">
                    <input
                      type="checkbox"
                      checked={theme === "dark"}
                      onChange={toggleTheme}
                      aria-label="Toggle theme"
                    />
                    <span className="slider" />
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
