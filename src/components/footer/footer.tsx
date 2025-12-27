import { useState } from "react";
import logo from "../images/logo.png";
import "./footer.css";
import growthagric from "../images/growthagric.jpeg";
import northside from "../images/northside.jpeg";
import smartkids from "../images/smartkids.jpeg";
import transcarbon from "../images/transcarbon.jpeg";
import trashcycler from "../images/trashcycler.jpeg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^\S+@\S+\.\S+$/.test(email);
    if (!ok) return setStatus("error");
    try {
      localStorage.setItem("vh_newsletter_email", email);
    } catch {}
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div>
        <section className="footer-partners" aria-label="Partners">
          <h3 className="footer-heading partners-title">Partners</h3>
          <ul className="partner-logos">
            <li className="partner-logo">
              <img
                src={growthagric}
                alt="Partner Logo"
                className="partner-logo"
              />
            </li>
            <li className="partner-logo">
              <img
                src={northside}
                alt="Partner Logo"
                className="partner-logo"
              />
            </li>
            <li className="partner-logo">
              <img
                src={smartkids}
                alt="Partner Logo"
                className="partner-logo"
              />
            </li>
            <li className="partner-logo">
              <img
                src={transcarbon}
                alt="Partner Logo"
                className="partner-logo"
              />
            </li>
            <li className="partner-logo">
              <img
                src={trashcycler}
                alt="Partner Logo"
                className="partner-logo"
              />
            </li>
          </ul>
        </section>
      </div>
      <hr />
      <div className="footer-inner container">
        <nav className="footer-links" aria-label="Quick links">
          <h3 className="footer-heading">Quick links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="footer-brand">
          <img src={logo} alt="Virtual Haven" className="footer-logo" />
          <p className="brand-desc">
            Helping learners find the right tools and courses with focused,
            practical content.
          </p>
          <br />
          <div className="social-icons" aria-label="Social media links">
            <p className="social-heading">Connect with us on Social Media</p>

            <a
              href="https://twitter.com/"
              className="social-link"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 2a4.48 4.48 0 00-4.47 4.47c0 .35.04.7.11 1.03A12.77 12.77 0 013 4.9s-4 9 5 13a13 13 0 01-8 2c12 7 27 0 27-16.5 0-.22 0-.44-.02-.65A9.3 9.3 0 0023 3z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/"
              className="social-link"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 10-11.5 9.87v-6.99h-2.2V12h2.2V9.8c0-2.17 1.3-3.37 3.3-3.37.96 0 1.96.17 1.96.17v2.15h-1.1c-1.1 0-1.44.68-1.44 1.38V12h2.47l-.39 2.88h-2.08v6.99A10 10 0 0022 12z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/"
              className="social-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.8 3.8 0 1015.8 12 3.8 3.8 0 0012 8.2zm4.9-3.6A1.1 1.1 0 1115 5.7 1.1 1.1 0 0116.9 4.6z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/"
              className="social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0zM7.5 8.5h4.7v2.1h.1c.65-1.2 2.24-2.1 4.6-2.1 4.92 0 5.83 3.24 5.83 7.45V24h-5v-7.83c0-1.87-.03-4.27-2.6-4.27-2.6 0-3 2.04-3 4.12V24h-5V8.5z" />
              </svg>
            </a>

            <a
              href="https://github.com/"
              className="social-link"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.005 2.045.138 3.003.405 2.29-1.554 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.767.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.81 1.096.81 2.21 0 1.595-.015 2.875-.015 3.268 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
        <section className="footer-newsletter" aria-label="Newsletter signup">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="brand-desc">
            Join our newsletter for course updates, partner offers, and curated
            resources.
          </p>

          <form
            onSubmit={handleSubmit}
            className="newsletter-form"
            aria-label="Subscribe to newsletter"
          >
            <label htmlFor="nl-email" className="visually-hidden">
              Email address
            </label>
            <div className="input-row">
              <input
                id="nl-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address"
                required
              />
              <button type="submit" className="btn">
                Subscribe
              </button>
            </div>
            {status === "success" && (
              <p className="nl-success">
                Thanks! Pls check your inbox. or spam if neccessary
              </p>
            )}
            {status === "error" && (
              <p className="nl-error">Please enter a valid email address.</p>
            )}
          </form>
        </section>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <small>
            © {new Date().getFullYear()} Virtual Haven — All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
