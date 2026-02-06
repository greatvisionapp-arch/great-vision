import "../css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faEnvelope,
  faStore,
  faUserShield,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo */}
        <div className="logo">
          <img src="/assets/logo-dot.png" className="logo-img" alt="logo" />
          <span className="logo-text">Great Vision</span>
        </div>

        {/* Nav */}
        <nav className="nav">
          {/* 🔥 Home sections (always work, even from /store) */}
          <a href="/#home">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </a>

          <a href="/#community">
            <FontAwesomeIcon icon={faUsers} />
            <span>Community</span>
          </a>

          <a href="/#footer">
            <FontAwesomeIcon icon={faCircleInfo} />
            <span>About Us</span>
          </a>

          <a href="/#contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </a>

          {/* Store page */}
          <a href="/store">
            <FontAwesomeIcon icon={faStore} />
            <span>Store</span>
          </a>
        </nav>

        {/* Actions */}
        <div className="actions">
          <button className="admin" type="button">
            <FontAwesomeIcon icon={faUserShield} />
            <span>Owner</span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
