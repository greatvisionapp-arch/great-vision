import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faStore,
  faBolt,
  faFan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="brand">
            <img
              src="/assets/logo-dot.png"
              alt="Great Vision Logo"
              className="brand-logo"
              loading="lazy"
            />
            <span className="brand-name">
              <span className="brand-great">Great</span>{" "}
              <span className="brand-vision">Vision</span>
            </span>
          </div>

          <p className="brand-desc">
            Thanks for visiting our website. This platform is owned and
            operated by <strong>Shivam Electricals</strong>.
          </p>
        </div>

        {/* PRODUCT */}
        <div className="footer-col">
          <h4>PRODUCT</h4>

          <Link to="/product/fans">
            <FontAwesomeIcon icon={faFan} />
            Fans
          </Link>

          <Link to="/product/mcb-db">
            <FontAwesomeIcon icon={faBolt} />
            MCB Box
          </Link>
        </div>

        {/* COMMUNITY */}
        <div className="footer-col">
          <h4>COMMUNITY</h4>

          <a
            href="https://github.com/greatvisionapp-arch/great-vision"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>

          <a href="#" aria-disabled="true">
            <FontAwesomeIcon icon={faFacebook} />
            Facebook
          </a>

          <a href="#" aria-disabled="true">
            <FontAwesomeIcon icon={faInstagram} />
            Instagram
          </a>

          <a href="#" aria-disabled="true">
            <FontAwesomeIcon icon={faYoutube} />
            YouTube
          </a>

          <Link to="/store">
            <FontAwesomeIcon icon={faStore} />
            Store
          </Link>
        </div>

        {/* LEGAL */}
        <div className="footer-col">
          <h4>LEGAL</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Imprint</a>
          <a href="#">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2008 – 2026 Shivam Electricals.</span>
        <span>Website design inspired by LocalSend</span>
      </div>
    </footer>
  );
}
