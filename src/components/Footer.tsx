import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faReddit,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";
import { faShirt } from "@fortawesome/free-solid-svg-icons";

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
            />
            <span className="brand-name">
              <span className="brand-great">Great</span>{" "}
              <span className="brand-vision">Vision</span>
            </span>
          </div>

          <p className="brand-desc">
            Thanks for visiting our website. This platform is owned and
            operated by Shivam Electricals.
          </p>
        </div>

        {/* PRODUCT */}
        <div className="footer-col">
          <h4>PRODUCT</h4>
          <a href="#">Fan</a>
          <a href="#">MCB Box</a>
        </div>

        {/* COMMUNITY */}
        <div className="footer-col">
          <h4>COMMUNITY</h4>

          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faDiscord} />
            Discord
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faReddit} />
            Reddit
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faMastodon} />
            Mastodon
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faShirt} />
            Merch
          </a>
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
